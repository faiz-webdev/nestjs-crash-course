import { Injectable, NotFoundException } from '@nestjs/common';
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
    if (task && task.length > 0) {
      return Promise.resolve(task[0]);
    }
    throw new NotFoundException('Task not found');
  }

  public async getAllTask(): Promise<ITask[]> {
    return Promise.resolve(this.tasks);
  }

  public async deleteTask(id: string): Promise<ITask[]> {
    const newTask = this.tasks.filter((i) => i.uuid !== id);
    this.tasks = newTask;
    return Promise.resolve(this.tasks);
  }

  public async filterTask(filter): Promise<ITask[]> {
    if (!filter) {
      return Promise.resolve(this.tasks);
    }
    return Promise.resolve(this.tasks.filter((i) => i.completed === filter));
  }
}
