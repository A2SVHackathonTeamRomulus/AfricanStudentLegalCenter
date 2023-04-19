import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { videoSchema } from './videoSchema/video.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'video',schema:videoSchema}])],
  controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule {}
