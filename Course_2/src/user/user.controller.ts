import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {

    @Get()
    findall() {
        return "Get All Users";
    }

    @Get(':id')
    findone(@Param("id") id: string) {
        return {
            user: {
                id: id
            }
        }
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return createUserDto;
    }

    // @Patch()
    // @Put()
    // @Delete()
}
