import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { user } from '@prisma/client'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() body: { userName: string; password: string }) {
        const { userName, password } = body;

        const user = await this.authService.login(userName, password);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return { message: 'Login successful' };
    }
    
    @Post('register')
    async register(@Body() body: { userName: string, password: string }):Promise<user> {
        const { userName, password } = body;
        return this.authService.register(userName, password);
    }
}
