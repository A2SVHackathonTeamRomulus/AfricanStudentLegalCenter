import { Controller, Get, Post, Body, Param, Put, Delete,UseGuards, Req } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog, Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Prisma.BlogUpdateInput,@Req() req:any):  Promise<{success:true,data:Blog} | { success: false, message: string }> {
    const user = req['user'];
    if (user.email != 'admin@gmail.com'){
      return {success:false,message:"unauthorized"}
    }
    return this.blogService.update(Number(id), data);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: string,@Req() req:any): Promise<{success:true,data:Blog} | { success: false, message: string }>{
    const user = req['user'];
    if (user.email != 'admin@gmail.com'){
      return {success:false,message:"unauthorized"}
    }
    return this.blogService.delete(Number(id));
  }
}

