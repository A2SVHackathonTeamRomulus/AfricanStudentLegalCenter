import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import {Model} from 'mongoose'
import { video } from './videoSchema/video.schema';

@Injectable()
export class VideoService {
  constructor(@InjectModel('video') private readonly videoModel:Model<video>){}
  
  async create(createVideoDto: CreateVideoDto, path: string) {
    
    const newvideo = new this.videoModel(createVideoDto);
        
        newvideo.videoPath=path 
        return await newvideo.save()
  }

  async findAll() {
    return await this.videoModel.find();
  }

  async findOne(id: string) {
    return await this.videoModel.findOne({id:id});
  }

  async update (id:string, video:UpdateVideoDto){
    return await this.videoModel.findByIdAndUpdate(id,video,{new:true})
}

  async remove(id: string) {
    return await this.videoModel.findOneAndRemove({id:id});
  }
}
