import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CheckoutController],
  providers: [CheckoutService, PrismaService]
})
export class CheckoutModule {}
