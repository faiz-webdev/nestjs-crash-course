import { Optional } from '@nestjs/common';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class TaskDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;

  //   completed: boolean;
  //   description: string;
  //   ownder: string;
  //   duration: number;
  //   id: string;
}

export class TaskParamDto {
  @IsUUID()
  @IsDefined()
  id: string;
}

export class QueryParamDto {
  @IsDefined()
  @IsBoolean()
  @Transform(({ value }) => {
    return value == 'true' ? true : false;
  })
  filter: boolean;

  @IsOptional()
  @IsString()
  @IsDefined()
  name: string;
}
