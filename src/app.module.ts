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
import { CheckoutModule } from './checkout/checkout.module';
import { AuthModule } from './auth/auth.module';

@Module({
<<<<<<< HEAD
  imports: [PrismaModule, UserModule, ShopModule, CategoryModule, ItemModule, CartModule, CheckoutModule],
  controllers: [AppController],
=======
  imports: [PrismaModule, UserModule, ShopModule, CategoryModule, ItemModule, CartModule, CheckoutModule, AuthModule],
  controllers: [AppController, CardController],
>>>>>>> 484afeb7e8bc81063a9930d163a951cc34e6a797
  providers: [AppService, PrismaService],
})
export class AppModule {}
