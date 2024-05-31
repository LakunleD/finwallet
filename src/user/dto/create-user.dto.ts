import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  email: string
}
