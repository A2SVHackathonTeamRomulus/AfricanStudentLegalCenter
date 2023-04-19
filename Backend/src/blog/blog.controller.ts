import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { BlogService } from './blog.service';
import {blog } from './blogSchema/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/users/enums/role.enum';
import { Roles } from 'src/users/roles.decorators';


@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(Role.Admin)
  @Post()
  async create(@Body() blogs: CreateBlogDto) {
    
    return await this.blogService.create(blogs);
  }

  @Get()
  async findAll(): Promise<blog[]> {
    return this.blogService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<blog> {
    return this.blogService.findOne(id);
  }
  
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(Role.Admin)
  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() blog: blog): Promise<blog> {
    return this.blogService.updateOne(id, blog);
  }

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  async deleteOne(@Param('id') id: number): Promise<blog> {
    return this.blogService.deleteOne(id);
  }
}

