import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ShopService } from './shop.service';
import {shop} from '@prisma/client'

@Controller('shop')
export class ShopController {
    constructor(private shopService: ShopService) { }

    @Get()
    async findAll(): Promise<shop[]> {
        return await this.shopService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<shop> {
        return await this.shopService.findById(id)
    }

    @Post()
    async createData(@Body() data: { 
        shopName: string,
        address: string,
        userId: string
    }): Promise<shop> {
        return await this.shopService.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id') id: string, @Body() data: { 
        shopName: string,
        address: string,
        userId: string
    }): Promise<shop> {
        return await this.shopService.updateData(id, data)
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string): Promise<shop> {
        return await this.shopService.deleteData(id)
    }
}
