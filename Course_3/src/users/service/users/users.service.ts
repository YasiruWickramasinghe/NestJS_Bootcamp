import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user.entity';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
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

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.usersRepository.update({id}, { ...updateUserDetails});
    }

    deleteUser(id: number) {
        return this.usersRepository.delete({id})
    }
}
