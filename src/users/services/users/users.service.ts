import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {

    private fakeUsers = [
        { username: 'yasiru', email: 'yasiru@gmail.com' },
        { username: 'sajith', email: 'sajith@gmail.com' },
        { username: 'muthu', email: 'muthu@gmail.com' }
    ]

    fetchUsers() {
        return this.fakeUsers;
    }

    createUsers(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number){
        return {id, username: "yasiru", emnail: "yasiru@gmail.com"}
        //uncomment to see if what happen when user is null
        // return null
    }
}
