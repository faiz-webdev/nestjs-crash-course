import {
  IsEmail,
  IsDefined,
  IsUUID,
  IsNotEmpty,
  IsObject,
  IsMongoId,
} from 'class-validator';

export class CreateUserDTO {
  readonly first_name: string;
  readonly last_name: string;

  @IsEmail()
  @IsDefined()
  readonly email: string;

  readonly phone: string;
  readonly address: string;
  readonly description: string;
  readonly created_at: Date;
}

export class UserParamDTO {
  @IsMongoId()
  @IsNotEmpty()
  readonly userId: string;
}
