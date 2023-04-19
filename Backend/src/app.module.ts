import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService],
})
export class AppModule {}
