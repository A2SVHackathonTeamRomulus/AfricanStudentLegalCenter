// src/videos/video.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Video } from '.prisma/client';
import { VideoDto } from './dto';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async create(data: VideoDto): Promise<Video> {
    return this.prisma.video.create({ data });
  }

  async findAll(): Promise<Video[]> {
    return this.prisma.video.findMany();
  }

  async findOne(id: number): Promise<Video> {
    return this.prisma.video.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: VideoDto):  Promise<{success:true,data:Video}|{success:false,message:string}>{
    const existingContact = await this.prisma.video.findFirst({ where: { id } });
    if (!existingContact) {
      return { success: false, message: 'video not found' };
    }
    const video = await this.prisma.video.update({
      where: { id },
      data,
    });
    return {success:true,data:video}
  }

  async remove(id: number): Promise<{success:true,data:Video}|{success:false,message:string}> {
    const existingContact = await this.prisma.video.findFirst({ where: { id } });
    if (!existingContact) {
      return { success: false, message: 'video not found' };
    }
    const video = await this.prisma.video.delete({
      where: { id },
    });
    return {success:true,data:video}

  }
}


