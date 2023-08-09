import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user.entity';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    findUsers(){
        return this.usersRepository.find()

    }

    createUser(userDetails: CreateUserParams) {

        const newUser = this.usersRepository.create({ 
            ...userDetails, 
            createdAt: new Date(),
        })
        return this.usersRepository.save(newUser);
    }
}
