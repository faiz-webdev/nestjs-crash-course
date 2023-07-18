import { Injectable } from '@nestjs/common';
import { ITask } from './interface/task';

@Injectable()
export class TaskStoreService {
  public tasks: ITask[] = [];

  public async addTask(task: ITask): Promise<ITask> {
    this.tasks.push(task);
    return Promise.resolve(task);
  }

  public async getTask(id: string): Promise<ITask> {
    const task = this.tasks.filter((i) => i.uuid === id);
    return task[0];
  }

  public async getAllTask(): Promise<ITask[]> {
    return Promise.resolve(this.tasks);
  }
}
