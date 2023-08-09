import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { user } from '@prisma/client'

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) { }

    async login(response: Response, userName: string, password: string): Promise<user> {

        const user = await this.prismaService.user.findUnique({ where: { userName } });

        // If no user is found, throw an error
        if (!user) {
            throw new NotFoundException(`No user found for username: ${userName}`);
        }

        // Step 2: Check if the password is correct
        const isPasswordValid = user.password === password;

        // If password does not match, throw an error
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        return "muhahaha";
    }
}

