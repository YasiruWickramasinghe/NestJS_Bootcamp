import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

    findUserComments(userId:string){
        return "This is the comments of the user"
    }
}
