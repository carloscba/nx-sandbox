import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDTO } from './dto/create-task-dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    createTask(createTaskDTO: CreateTaskDTO): Task {
        const { title, description } = createTaskDTO;
        const task: Task = {
            id: new Date().getTime(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }

    getTasks() {
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
