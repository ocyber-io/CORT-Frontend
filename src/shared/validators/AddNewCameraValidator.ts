import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AddNewCameraValidator {
  @IsString({ message: "Must enter name" })
  @IsNotEmpty({ message: "Must enter the name" })
  name: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString({ message: "Must enter password" })
  password: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString({ message: "Must enter address" })
  address: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString({ message: "Must enter model" })
  model: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString({ message: "Must enter port]" })
  port: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString({ message: "Must enter make" })
  make: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString({ message: "Must enter username" })
  username: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString({ message: "Must enter path" })
  path: string;

  @IsNotEmpty({ message: "Must select at least one option" })
  protocol: string;

  @IsNotEmpty({
    message: "Must select at least one option",
  })
  stream: string;
}
