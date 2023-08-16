import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from '../dtos/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}


    //User SignUp
    @Post('/signup')
    signUp(
        @Body() body: SignUpDto
    ){
        return this.authService.signUp(body)
    }

    //User SignIn
    @Post('/signin')
    signIn(){
        return this.authService.signIn()
    }

    //Get User Profile
    @Get('/profile')
    profile(){
        return this.authService.profile()
    }
}
