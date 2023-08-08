import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {

    //add validation
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    age:number
}