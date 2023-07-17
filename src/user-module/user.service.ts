import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './interfaces/user';

@Injectable()
export class UserService {
  public users: IUser[] = [];

  getUsers(): IUser[] {
    return this.users;
  }

  getUser(email: string): IUser {
    // const user = this.users.find((user) => user.email == email);
    const userData = this.users.filter((user) => user.email === email)[0];

    if (userData && Array.isArray(userData) && userData.length > 0) {
      return userData[0];
    }
    throw new NotFoundException('User not found');
  }

  async addUser(user: IUser): Promise<IUser> {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): IUser[] {
    const remaining = this.users.filter((i) => i.email !== email);
    console.log(remaining);
    this.users = remaining;
    return this.users;
  }
}
