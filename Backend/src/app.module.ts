import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { AuthorityModule } from './authority-contact/authority-contact.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoModule } from './video/video.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { UsersModule } from './users/users.module';
import { UserDataController } from './user-data/user-data.controller';
import { UserDataService } from './user-data/user-data.service';
import { UserDataModule } from './user-data/user-data.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/mongo.keys'

@Module({
  imports: [UserDataModule, UserDataModule, AuthModule, UsersModule, ConfigModule.forRoot(), BlogModule, AuthorityModule, VideoModule, MongooseModule.forRoot(config.mongoURi )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
