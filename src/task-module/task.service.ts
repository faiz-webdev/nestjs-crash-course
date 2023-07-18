import { Injectable } from '@nestjs/common';
import { ITask } from './interface/task';
import { TaskStoreService } from './task-store.service';

@Injectable()
export class TaskService {
  constructor(private taskStoreService: TaskStoreService) {}

  public async addTask(task: ITask): Promise<ITask> {
    return await this.taskStoreService.addTask(task);
  }

  public async getTask(id: string): Promise<ITask> {
    return await this.taskStoreService.getTask(id);
  }

  public async getAllTask(): Promise<ITask[]> {
    return await this.taskStoreService.getAllTask();
  }
}
