import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { category } from '@prisma/client'

@Injectable()
export class CategoryService {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<category[]> {
        return this.prismaService.category.findMany()
    }

    async findById(id: string): Promise<category> {
        return this.prismaService.category.findFirst()
    }

    async createData(
        data: { categoryName: string }): Promise<category> {
        return this.prismaService.category.create({ data })
    }

    async updateData(
        id: string, data: { categoryName: string }): Promise<category> {
        return this.prismaService.category.update({
            where: { id },
            data,
        })
    }

    async deleteData(id: string): Promise<category> {
        return this.prismaService.category.delete({ where: { id } })
    }
}
