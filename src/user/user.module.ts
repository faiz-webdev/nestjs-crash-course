import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entity/user.entity';
import { Customer } from '../database/entity/customer.entity';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Customer])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
