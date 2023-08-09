import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { checkout } from '@prisma/client'
import { CheckoutService } from './checkout.service';

@Controller('checkout')
export class CheckoutController {
    constructor(private checkoutService: CheckoutService) { }

    @Get()
    async findAll(): Promise<checkout[]> {
        return await this.checkoutService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<checkout> {
        return await this.checkoutService.findById(id)
    }

    @Post()
    async createData(@Body() data: {
        checkAmount: number,
        itemId: string,
        userId: string,
        shopId: string,
    }): Promise<checkout> {
        return await this.checkoutService.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id') id: string, @Body() data: {
        checkAmount: number,
        itemId: string,
        userId: string,
        shopId: string,
    }): Promise<checkout> {
        return await this.checkoutService.updateData(id, data)
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string): Promise<checkout> {
        return await this.checkoutService.deleteData(id)
    }
}
