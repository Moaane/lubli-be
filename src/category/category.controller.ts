import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { category } from '@prisma/client';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    async findAll(): Promise<category[]> {
        return await this.categoryService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<category> {
        return await this.categoryService.findById(id)
    }

    @Post()
    async createData(@Body() data: { categoryName: string }): Promise<category> {
        return await this.categoryService.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id') id: string, @Body() data: { categoryName: string }): Promise<category> {
        return await this.categoryService.updateData(id, data)
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string): Promise<category> {
        return await this.categoryService.deleteData(id)
    }
}
