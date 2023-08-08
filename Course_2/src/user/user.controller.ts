import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
    create(@Body("name") name:string){
        return "The user name is " + name;
    }
}
