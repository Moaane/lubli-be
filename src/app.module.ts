import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { ShopModule } from './shop/shop.module';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { CartModule } from './cart/cart.module';
import { CardController } from './card/card.controller';
import { CheckoutModule } from './checkout/checkout.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, ShopModule, CategoryModule, ItemModule, CartModule, CheckoutModule, AuthModule],
  controllers: [AppController, CardController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
