import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  public async listUser(): Promise<User[]> {
    return await this.userRepo.find({});
  }

  public async getUser(id: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id: parseInt(id) } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  public async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    try {
      const { firstName, lastName, email, course } = createUserDTO;
      const user = new User();
      user.email = email;
      user.firstName = firstName;
      user.lastName = lastName;
      user.course = course;

      return await this.userRepo.save(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  // public async updateUser(
  //   id,
  //   userDto: Partial<CreateUserDTO>,
  // ): Promise<User> {
  //   const updatedUser = await this.UserModel.findByIdAndUpdate(
  //     id,
  //     UserDto,
  //     { new: true },
  //   );
  //   return updatedUser;
  // }

  public async removeUser(id: string): Promise<User> {
    try {
      const user = await this.userRepo.findOne({ where: { id: parseInt(id) } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return await this.userRepo.remove(user);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
