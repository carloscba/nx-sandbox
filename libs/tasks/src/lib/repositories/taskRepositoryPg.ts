import { AbstractTaskRepository } from '../interfaces/abstractTaskRepository';
import { Task, TaskStatus } from '../interfaces/task.model';


export class TaskRepositoryPg implements AbstractTaskRepository {
    
    tasks: Task[] = [{
        id: 'asdasd',
        title: 'title',
        description: 'description',
        status: TaskStatus.OPEN,
    }];

    getTasks(): Task[] {
        return this.tasks;
    }

    createTask(task: Task): Task {
        this.tasks.push(task);
        return task;
    }

}