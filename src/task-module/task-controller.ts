import { Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { ITask } from './interface/task';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/')
  async addTask(task: ITask): Promise<ITask> {
    return await this.taskService.addTask(task);
  }

  @Get('/:id')
  async getTask(id: string): Promise<ITask> {
    return await this.taskService.getTask(id);
  }

  @Get('/')
  async getAllTasks(): Promise<ITask[]> {
    return await this.taskService.getAllTask();
  }
}
