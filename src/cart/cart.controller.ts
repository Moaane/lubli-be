import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { cart } from '@prisma/client'

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @Get()
    async findAll(): Promise<cart[]> {
        return await this.cartService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<cart> {
        return await this.cartService.findById(id)
    }

    @Post()
    async createData(@Body() data: {
        cartAmount: number,
        itemId: string,
        userId: string,
    }): Promise<cart> {
        return await this.cartService.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id') id: string, @Body() data: {
        cartAmount: number,
        itemId: string,
        userId: string,
    }): Promise<cart> {
        return await this.cartService.updateData(id, data)
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string): Promise<cart> {
        return await this.cartService.deleteData(id)
    }
}
