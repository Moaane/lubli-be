import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { cart } from '@prisma/client';

@Injectable()
export class CartService {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<cart[]> {
        return this.prismaService.cart.findMany()
    }

    async findById(id: string): Promise<cart> {
        return this.prismaService.cart.findFirst()
    }

    async createData(
        data: {
            cartAmount: number,
            itemId: string,
            userId: string,
        }): Promise<cart> {
        return this.prismaService.cart.create({ data })
    }

    async updateData(
        id: string, data: {
            cartAmount: number,
            itemId: string,
            userId: string,
        }): Promise<cart> {
        return this.prismaService.cart.update({
            where: { id },
            data,
        })
    }

    async deleteData(id: string): Promise<cart> {
        return this.prismaService.cart.delete({ where: { id } })
    }
}
