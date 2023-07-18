import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  ParseBoolPipe,
  Post,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { ITask } from './interface/task';
import { Response } from 'express';
import { QueryParamdto, TaskDto, TaskParamDto } from './dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async addTask(@Body() task: TaskDto, @Res() res: Response) {
    const data = await this.taskService.addTask(task);
    return res.status(200).send(data);
  }

  @Get('/filter')
  @UsePipes(new ValidationPipe())
  async filterTaskById(
    @Query('filter') filter: ParseBoolPipe,
    @Res() res: Response,
  ) {
    try {
      const data = await this.taskService.filterTask(filter);
      return res.status(200).send(data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('/:id')
  @UsePipes(new ValidationPipe())
  async getTaskById(@Param() param: TaskParamDto, @Res() res: Response) {
    try {
      const data = await this.taskService.getTask(param.id);
      return res.status(200).send(data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async deleteTaskById(@Param() param: TaskParamDto, @Res() res: Response) {
    const data = await this.taskService.deleteTask(param.id);
    return res.status(200).send(data);
  }

  @Get('')
  async getAllTasks(@Res() res: Response) {
    const data = await this.taskService.getAllTask();
    // return await this.taskService.getAllTask();
    return res.status(200).send(data);
  }
}
