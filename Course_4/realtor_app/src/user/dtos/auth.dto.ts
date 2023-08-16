import { IsString, IsNotEmpty, IsEmail, MinLength, Matches } from "class-validator";


export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @Matches(/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/, { message: "phone must be a valid phone number" })
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(5)
    password: string;
}

export class SignInDto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}