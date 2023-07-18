import { Injectable } from '@nestjs/common';
import { ITask } from './interface/task';
import { TaskStoreService } from './task-store.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  constructor(private taskStoreService: TaskStoreService) {}

  public async addTask(task: ITask): Promise<ITask> {
    task.uuid = await uuidv4();
    task.completed = true;
    task.description = 'dummy';
    task.ownder = 'Faiz';
    task.duration = 2;
    return await this.taskStoreService.addTask(task);
  }

  public async getTask(id: string): Promise<ITask> {
    return await this.taskStoreService.getTask(id);
  }

  public async getAllTask(): Promise<ITask[]> {
    return await this.taskStoreService.getAllTask();
  }
}
