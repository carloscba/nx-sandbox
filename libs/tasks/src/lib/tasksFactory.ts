import { AbstractFactory } from "./interfaces/abstractFactory";
import { AbstractTaskRepository } from './interfaces/abstractTaskRepository';
import { TaskRepositoryPg } from './repositories/taskRepositoryPg';
import { TaskRepositoryNoSql } from './repositories/taskRepositoryNoSql';

export class TaskFactoryPG implements AbstractFactory { 
    createTaskRepository(): AbstractTaskRepository {
        return new TaskRepositoryPg();
    }
}

export class TaskFactoryNoSQL implements AbstractFactory { 
    createTaskRepository(): AbstractTaskRepository {
        return new TaskRepositoryNoSql();
    }
}