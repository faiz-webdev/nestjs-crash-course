import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { ITask } from './interface/task';
import { Response } from 'express';
import { TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async addTask(@Body() task: TaskDto, @Res() res: Response) {
    const data = await this.taskService.addTask(task);
    return res.status(200).send(data);
  }

  @Get('/:id')
  async getTask(id: string): Promise<ITask> {
    return await this.taskService.getTask(id);
  }

  @Get('')
  async getAllTasks(@Res() res: Response) {
    const data = this.taskService.getAllTask();
    // return await this.taskService.getAllTask();
    return res.status(200).send(data);
  }
}
