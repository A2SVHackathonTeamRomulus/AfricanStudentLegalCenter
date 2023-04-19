import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { AuthorityModule } from './authority-contact/authority-contact.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoModule } from './video/video.module';

@Module({
  imports: [BlogModule, AuthorityModule, VideoModule, MongooseModule.forRoot('mongodb+srv://romulus:123@cluster0.fktecgb.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
