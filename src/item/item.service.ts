import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { item } from '@prisma/client'

@Injectable()
export class ItemService {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<item[]> {
        return this.prismaService.item.findMany()
    }

    async findById(id: string): Promise<item> {
        return this.prismaService.item.findFirst()
    }

    async createData(
        data: {
            itemName: string,
            description: string,
            image: string,
            price: number,
            stock: number
        }): Promise<item> {
        return this.prismaService.item.create({ data })
    }

    async updateData(
        id: string, data: {
            itemName: string,
            description: string,
            image: string,
            price: number,
            stock: number,

            categoryId: string,
            shopId: string
        }): Promise<item> {
        return this.prismaService.item.update({
            where: { id },
            data,
        })
    }

    async deleteData(id: string): Promise<item> {
        return this.prismaService.item.delete({ where: { id } })
    }
}
