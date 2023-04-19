import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog, Prisma } from '@prisma/client';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post()
  async create(@Body() data: Prisma.BlogCreateInput): Promise<Blog> {
    return this.blogService.create(data);
  }

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Blog | null> {
    return this.blogService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Prisma.BlogUpdateInput):  Promise<{success:true,data:Blog} | { success: false, message: string }> {
    return this.blogService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{success:true,data:Blog} | { success: false, message: string }>{
    return this.blogService.delete(Number(id));
  }
}

