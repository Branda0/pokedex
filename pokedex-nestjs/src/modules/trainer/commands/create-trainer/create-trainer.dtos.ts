import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTrainerRequestDto {
  @MaxLength(50)
  @MinLength(5)
  @IsEmail()
  readonly email: string;

  @MaxLength(50)
  @MinLength(4)
  @IsString()
  readonly userName: string;

  @MaxLength(100)
  @MinLength(5)
  @IsString()
  password: string;
}

export class CreateTrainerHashedRequestDto {
  readonly email: string;
  readonly userName: string;
  readonly hashPassword: string;
}

export class CreateTrainerResponseDto {
  readonly id: string;
}
