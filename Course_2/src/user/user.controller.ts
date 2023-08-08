import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
    //service injected
    constructor(private readonly userService: UserService, private readonly commentService: CommentService) { }

    @Get()
    findall() {
        return "Get All Users";
    }

    @Get(':id')
    findone(@Param("id") id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    // @Patch()
    // @Put()
    // @Delete()

    @Get(':id/comments')
    getUserComment(@Param("id") id: string) {
        return this.commentService.findUserComments(id)
    }

}
