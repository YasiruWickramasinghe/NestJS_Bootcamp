import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return { username: 'yasiru', email: 'yasiru@gmail.com' }
    }

    @Get('/posts')
    getUsersPosts() {
        return [
            {
                username: 'yasiru', email: 'yasiru@gmail.com', posts: [
                    {
                        id: 1,
                        title: 'Post 1',
                    },
                    {
                        id: 2,
                        title: 'Post 2',
                    },
                    {
                        id: 3,
                        title: 'Post 3',
                    },
                ]
            }
        ];
    }

    @Get('posts/comments')
    getUsersPostsComments() {
        return [

            {
                id: 1,
                title: 'Post 1',
                comments: []
            },
            {
                id: 2,
                title: 'Post 2',
                comments: []
            },
            {
                id: 3,
                title: 'Post 3',
                comments: []
            },

        ];
    }
}
