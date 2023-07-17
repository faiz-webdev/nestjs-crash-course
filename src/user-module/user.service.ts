import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user';

@Injectable()
export class UserService {
  public users: IUser[];

  getUsers(): IUser[] {
    return this.users;
  }

  getUser(email: string): IUser {
    // const user = this.users.find((user) => user.email == email);
    return this.users.filter((user) => user.email === email)[0];
  }

  addUser(user: IUser): IUser {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): IUser[] {
    const remaining = this.users.filter((i) => i.email !== email);
    this.users = remaining;
    return this.users;
  }
}
