import { Injectable } from '@nestjs/common';
import { checkout } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CheckoutService {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<checkout[]> {
        return this.prismaService.checkout.findMany()
    }

    async findById(id: string): Promise<checkout> {
        return this.prismaService.checkout.findFirst()
    }

    async createData(
        data: {
            checkAmount: number,
            itemId: string,
            userId: string,
            shopId: string,
        }): Promise<checkout> {
        return this.prismaService.checkout.create({ data })
    }

    async updateData(
        id: string, data: {
            checkAmount: number,
            itemId: string,
            userId: string,
            shopId: string,
        }): Promise<checkout> {
        return this.prismaService.checkout.update({
            where: { id },
            data,
        })
    }

    async deleteData(id: string): Promise<checkout> {
        return this.prismaService.checkout.delete({ where: { id } })
    }
}
