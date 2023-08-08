import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    //add validation
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}