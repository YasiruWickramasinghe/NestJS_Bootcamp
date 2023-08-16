import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserType } from "@prisma/client"


interface SignUpParams {
    name: string;
    email: string;
    phone: string;
    password: string;
}

@Injectable()
export class AuthService {

    //import prisma service
    constructor(private readonly prismaService: PrismaService) { }

    //User SignUp
    async signUp({ email, password, name, phone }: SignUpParams) {

        //check user exist
        const userExist = await this.prismaService.user.findUnique({
            where: {
                email
            }
        })

        //if user exist throw an error
        if (userExist) {
            throw new ConflictException();
        }

        //Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        //Store data into postgres
        const user = await this.prismaService.user.create({
            data: {
                email,
                name,
                phone,
                password: hashedPassword,
                user_type: UserType.BUYER
            }
        })

        //genereate jwt token
        const token = await jwt.sign({
            name,
            id: user.id
        }, process.env.JSON_TOKEN_KEY, {
            expiresIn: 3600
        })

        //return generated token
        return {token}
    }

    //User SignIn
    signIn() {
        return 'signin'
    }

    //Get User Profile
    profile() {
        return 'profile'
    }
}
