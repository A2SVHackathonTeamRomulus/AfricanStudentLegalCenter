import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';


import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { VideoService } from './video/video.service';
import { VideoController } from './video/video.controller';


@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AppController, BlogController,  ContactsController, VideoController],
  providers: [AppService, BlogService, ContactsService, VideoService],
})
export class AppModule {}
