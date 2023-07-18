export interface ITask {
  uuid?: string;
  name: string;
  completed?: boolean;
  description?: string;
  ownder?: string;
  duration?: number;
}
