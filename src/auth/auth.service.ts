import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { user } from '@prisma/client'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) { }

    async login(userName: string, password: string): Promise<user> {

        const user = await this.prismaService.user.findUnique({ where: { userName } });

        if (!user) {
            throw new NotFoundException(`No user found for username: ${userName}`);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        return user;
    }

    async register(userName: string, password: string): Promise<user> {
        const isUserValid = await this.prismaService.user.findUnique({
            where: { userName },
        });

        if (isUserValid) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prismaService.user.create({
            data: {
                userName,
                password: hashedPassword,
            },
        });

        return user;
    }

}

