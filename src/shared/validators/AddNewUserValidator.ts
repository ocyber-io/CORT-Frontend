import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class AddNewUserValidator {
  @IsString({ message: "Must enter name" })
  @IsNotEmpty({ message: "Must enter the name" })
  firstname: string;

  @IsString({ message: "Must enter name" })
  @IsNotEmpty({ message: "Must enter the name" })
  lastname: string;

  @IsEmail()
  @IsString({ message: "Must enter name" })
  @IsNotEmpty({ message: "Must enter the email address" })
  email: string;

  @IsString({ message: "Must enter name" })
  @IsNotEmpty({ message: "Must enter the phone number" })
  phonenumber: string;

  @IsStrongPassword()
  @IsString({ message: "Must enter name" })
  @IsNotEmpty({ message: "create a password" })
  password: string;

  @IsString({ message: "Must enter name" })
  @IsNotEmpty({ message: "Must enter the role" })
  role: string;

  @IsNotEmpty({ message: "Must select at least one camera" })
  selectcamera: string;
}
