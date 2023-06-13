import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginFormValidator {
  @IsNotEmpty({ message: "Must enter your email address" })
  identifier: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString({ message: "Must enter password" })
  password: string;
}
