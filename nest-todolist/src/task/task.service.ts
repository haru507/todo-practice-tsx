import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateTaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async create(task: CreateTaskDTO): Promise<InsertResult> {
    return await this.taskRepository.insert(task);
  }

  async find(id: number): Promise<Task> {
    return await this.taskRepository.findOne(id);
  }

  async update(id: number, task): Promise<UpdateResult> {
    return await this.taskRepository.update(id, task);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
