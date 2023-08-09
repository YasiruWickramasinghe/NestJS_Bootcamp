import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post.entity';
import { Profile } from 'src/typeorm/entities/profile.entity';
import { User } from 'src/typeorm/entities/user.entity';
import { CreateUserParams, CreateUserPostParams, CreateUserProfileParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,

        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,

        @InjectRepository(Post)
        private postRepository: Repository<Post>,
      ) {}

    findUsers(){
        return this.usersRepository.find({relations: ['profile','posts']})

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

    async createUserProfile(id: number, createUserProfileDetails: CreateUserProfileParams) {

       const user = await this.usersRepository.findOneBy({id})
       if(!user) throw new HttpException('User not found. cannot create Profile', HttpStatus.BAD_REQUEST);

       const newProfile = this.profileRepository.create(createUserProfileDetails)
       const saveProfile = await this.profileRepository.save(newProfile)
       user.profile = saveProfile;
       return this.usersRepository.save(user);
    }

    async createUserPost(id: number, createUserPostDetails: CreateUserPostParams){

        const user = await this.usersRepository.findOneBy({id})
        if(!user) throw new HttpException('User not found. cannot create Profile', HttpStatus.BAD_REQUEST);

        const newPost = this.postRepository.create({
            ...createUserPostDetails,
            user,
        });
        return this.postRepository.save(newPost);

    }
}
