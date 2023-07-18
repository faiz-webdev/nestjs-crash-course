import { Controller, Get, Post, Res } from '@nestjs/common';
import { TaskService } from './task.service';
import { ITask } from './interface/task';
import { Response } from 'express';
import { IUser } from '../user-module/interfaces/user';

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
  async getAllTasks(@Res() res: Response) {
    const data = this.taskService.getAllTask();
    // return await this.taskService.getAllTask();
    return res.status(200).send(data);
  }
}
