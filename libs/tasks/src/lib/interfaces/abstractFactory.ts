import { AbstractTaskRepository } from './abstractTaskRepository';

export interface AbstractFactory {
    createTaskRepository(): AbstractTaskRepository;
}