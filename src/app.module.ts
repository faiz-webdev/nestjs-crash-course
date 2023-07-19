import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task-module/task.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from '../src/user/user.module';

@Module({
  imports: [TaskModule, DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [DatabaseModule],
})
export class AppModule {}
