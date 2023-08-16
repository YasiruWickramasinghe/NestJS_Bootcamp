import { Injectable, ConflictException, HttpException } from '@nestjs/common';
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

interface SignInParams {
    email: string;
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

        //call generateJWT function
        const token = await this.generateJWT( name, user.id );

        //return generated token
        return { token }
    }

    //User SignIn
    async signIn({ email, password }: SignInParams) {

        //check user exist
        const user = await this.prismaService.user.findUnique({
            where: {
                email
            }
        })

        //if user doesn't exist throw an error
        if (!user) {
            throw new HttpException('Invalid Credentials', 400)
        }

        //Hash the password
        const hashedPassword = user.password;

        //decrypt password
        const isValidPassword = await bcrypt.compare(password, hashedPassword)

        //check if password is correct
        if (!isValidPassword) {
            throw new HttpException('Invalid Credentials', 400)
        }

        //call generateJWT function
        const token = await this.generateJWT( user.name, user.id );

        return {token}

    }

    //Get User Profile
    async profile() {
        return 'profile'
    }

    //generate JWT Token
    private generateJWT(name: string, id: number) {

        //genereate jwt token
        return jwt.sign({
            name,
            id
        }, process.env.JSON_TOKEN_KEY, {
            expiresIn: 3600
        })
    }

    
}
