import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
// import { AppController } from './user.controller';
// import { AppService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
