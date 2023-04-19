import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';


import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';


@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AppController, BlogController,  ContactsController],
  providers: [AppService, BlogService, ContactsService],
})
export class AppModule {}
