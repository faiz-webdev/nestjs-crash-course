import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  username: string;
}
export class UserParamDto {
  @IsEmail()
  @IsDefined()
  email: string;
}
