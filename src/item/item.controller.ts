import { Controller, Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemService } from './item.service';
import { item } from '@prisma/client'

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) { }

    @Get()
    async findAll(): Promise<item[]> {
        return await this.itemService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<item> {
        return await this.itemService.findById(id)
    }

    @Post()
    async createData(@Body() data: {
        itemName: string,
        description: string,
        image: string,
        price: number,
        stock: number,

        categoryId: string,
        shopId: string
    }): Promise<item> {
        return await this.itemService.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id') id: string, @Body() data: {
        itemName: string,
        description: string,
        image: string,
        price: number,
        stock: number,

        categoryId: string,
        shopId: string
    }): Promise<item> {
        return await this.itemService.updateData(id, data)
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string): Promise<item> {
        return await this.itemService.deleteData(id)
    }
}
