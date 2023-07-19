import { Module } from '@nestjs/common';
import { CustomerService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entity/user.entity';
import { Customer } from '../database/entity/customer.entity';
import { UserController } from './controller/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Customer])],
  controllers: [UserController],
  providers: [CustomerService],
})
export class CustomerModule {}
