import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task-dto';
import { TaskFactoryPG, AbstractTaskRepository, Task, TaskStatus } from '@nx-sandbox/tasks';

@Injectable()
export class TasksService {
    private tasks: Task[];
    private taskFactory: AbstractTaskRepository;

    constructor() {
        const factory = new TaskFactoryPG();
        this.taskFactory = factory.createTaskRepository();
    }

    createTask(createTaskDTO: CreateTaskDTO): Task {
        const { title, description } = createTaskDTO;
        const task: Task = {
            id: new Date().getTime(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        
        return this.taskFactory.createTask(task);
    }

    getTasks() {
        this.tasks = this.taskFactory.getTasks();
        return this.tasks;
    }

    getTaskById(id: number): Task {
        const found = this.tasks.find(task => task.id === Number(id));

        if(!found) {
            throw new NotFoundException();
        }

        return found;
    }

    updateStatus(id: number, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }

    deleteTaskById(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== Number(id));
    }
}
