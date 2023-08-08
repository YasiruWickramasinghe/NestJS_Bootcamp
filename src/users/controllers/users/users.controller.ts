import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return { username: 'yasiru', email: 'yasiru@gmail.com' }
    }

    // @Get('/posts')
    // getUsersPosts() {
    //     return [
    //         {
    //             username: 'yasiru', email: 'yasiru@gmail.com', posts: [
    //                 {
    //                     id: 1,
    //                     title: 'Post 1',
    //                 },
    //                 {
    //                     id: 2,
    //                     title: 'Post 2',
    //                 },
    //                 {
    //                     id: 3,
    //                     title: 'Post 3',
    //                 },
    //             ]
    //         }
    //     ];
    // }

    // @Get('posts/comments')
    // getUsersPostsComments() {
    //     return [

    //         {
    //             id: 1,
    //             title: 'Post 1',
    //             comments: []
    //         },
    //         {
    //             id: 2,
    //             title: 'Post 2',
    //             comments: []
    //         },
    //         {
    //             id: 3,
    //             title: 'Post 3',
    //             comments: []
    //         },

    //     ];
    // }

    // //Combining with express frameword
    // @Post('create')
    // createUser(@Req() request:Request, @Res() response:Response ){
    //     console.log(request.body);
    //     response.send('Created');
    // }

    @Post('create')
    createUser(@Body() userData:CreateUserDto){
        console.log(userData);
        return {};
    }
}
