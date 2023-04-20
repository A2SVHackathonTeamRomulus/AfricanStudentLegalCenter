// src/videos/video.controller.ts

import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    UseGuards
  } from '@nestjs/common';
  import { VideoService } from './video.service';
  import { Video } from '.prisma/client';
  import { VideoDto } from './dto';
  import { AuthGuard } from "@nestjs/passport";
  
  @Controller('videos')
  export class VideoController {
    constructor(private readonly videoService: VideoService) {}
  
    @Post()
    create(@Body() createVideoDto: VideoDto): Promise<Video> {
      return this.videoService.create(createVideoDto);
    }
  
    @Get()
    findAll(): Promise<Video[]> {
      return this.videoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Video> {
      return this.videoService.findOne(+id);
    }
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateVideoDto: VideoDto,
    ): Promise<{success:true,data:Video}|{success:false,message:string}> {
      
      return this.videoService.update(+id, updateVideoDto);
    }
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    remove(@Param('id') id: string): Promise<{success:true,data:Video}|{success:false,message:string}> {
      return this.videoService.remove(+id);
    }
  }
  