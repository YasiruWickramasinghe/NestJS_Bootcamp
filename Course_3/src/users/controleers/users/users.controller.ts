import { Body, Controller, Get, Post, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
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
    async updateUser(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateUserDto: UpdateUserDto
        ) {
         await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id:number,) {
         await this.userService.deleteUser(id);
    }
}
