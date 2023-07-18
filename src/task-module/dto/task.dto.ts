import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
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

export class QueryParamdto {
  @IsDefined()
  @IsBoolean()
  filter: string;
}
