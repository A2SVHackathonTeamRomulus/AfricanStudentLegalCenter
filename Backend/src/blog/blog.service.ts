import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Blog, Prisma } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BlogCreateInput): Promise<Blog> {
    return this.prisma.blog.create({
      data,
    });
  }

  async findAll(): Promise<Blog[]> {
    return this.prisma.blog.findMany();
  }

  async findOne(id: number): Promise<Blog | null> {
    return this.prisma.blog.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.BlogUpdateInput): Promise<{success:true,data:Blog} | { success: false, message: string }>{
    try {
    const existingblog = await this.prisma.blog.findFirst({ where: { id } });
    if (!existingblog) {
      return { success: false, message: 'blog not found' };
    }
    const blog = await this.prisma.blog.update({
      where: { id },
      data,
    });
    return {success:true,data:blog}
    } catch (error) {
      return {success:false,message:error}
    }
    
  }

  async delete(id: number): Promise<{success:true,data:Blog} | { success: false, message: string }> {
    try {
    const existingContact = await this.prisma.blog.findFirst({ where: { id } });
    if (!existingContact) {
      return { success: false, message: 'blog not found' };
    }
    const blog = await this.prisma.blog.delete({
      where: { id },
    });

    return {success:true,data:blog}; 
    } catch (error) {
      return {success:false,message:error}
      
    }
    
  }
}

