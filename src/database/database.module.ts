import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from 'src/customer/controller/customer.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/test', {})],
  controllers: [CustomerController],
  providers: [],
})
export class DatabaseModule {}
