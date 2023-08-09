import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { shop } from '@prisma/client'

@Injectable()
export class ShopService {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<shop[]> {
        return this.prismaService.shop.findMany()
    }

    async findById(id: string): Promise<shop> {
        return this.prismaService.shop.findFirst()
    }

    async createData(
        data: {
            shopName: string,
            address: string,
            userId: string
        }): Promise<shop> {
        return this.prismaService.shop.create({ data })
    }

    async updateData(
        id: string, data: {
            shopName: string,
            address: string,
            userId: string
        }): Promise<shop> {
        return this.prismaService.shop.update({
            where: { id },
            data,
        })
    }

    async deleteData(id: string): Promise<shop> {
        return this.prismaService.shop.delete({ where: { id } })
    }
}
