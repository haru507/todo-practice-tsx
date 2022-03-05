import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateTaskDTO } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private readonly service: TaskService
    ){}

    @Get()
    async getTaskList(): Promise<Task[]> {
        return await this.service.findAll();
    }

    @Post()
    async addTask(@Body() task: CreateTaskDTO): Promise<InsertResult> {
        return await this.service.create(task);
    }

    @Get(':id')
    async getTask(@Param('id') id: string): Promise<Task> {
        return await this.service.find(Number(id));
    }

    @Put(':id/update')
    async updateTask(
        @Param('id') id: string,
        @Body() task: CreateTaskDTO
    ): Promise<UpdateResult> {
        return await this.service.update(Number(id), task);
    }

    @Delete(':id')
    async deleteTask(
        @Param('id') id: string
    ): Promise<DeleteResult> {
        return await this.service.delete(Number(id));
    }
}
