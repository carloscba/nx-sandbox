import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDTO } from './dto/create-task-dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: number) {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
        return this.tasksService.createTask(createTaskDTO);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: number): void {
        this.tasksService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTask(
        @Param('id') id: number,
        @Body('status') status: TaskStatus,
    ) {
        this.tasksService.updateTask(id, status);
    }
}
