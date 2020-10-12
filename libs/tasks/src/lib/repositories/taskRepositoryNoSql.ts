import { AbstractTaskRepository } from '../interfaces/abstractTaskRepository';

export class TaskRepositoryNoSql implements AbstractTaskRepository {
    getTasks() {
        return ['NoSqltask1', 'NoSqltask2'];
    }
}