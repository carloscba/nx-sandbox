import { Task } from './task.model';
export interface AbstractTaskRepository {
    getTasks(): Task[];
    createTask(task: Task): Task;
}