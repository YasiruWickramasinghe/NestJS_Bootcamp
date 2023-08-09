import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.findUsers();
        ;
    }

    @Post()
    createUsers(@Body() createUserDto: CreateUserDto) {
        this.userService.createUser(createUserDto)
    }

    @Put(':id')
    updateUser() {

    }

    @Delete()
    deleteUser() {

    }
}
