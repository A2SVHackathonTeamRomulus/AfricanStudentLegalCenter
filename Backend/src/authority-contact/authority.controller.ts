import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthorityService } from './authority.service';
import {authority } from './authoritySchema/authority.schema';
import { CreateAuthorityDto } from './dto/create-authority.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/users/enums/role.enum';
import { Roles } from 'src/users/roles.decorators';

@Controller('authority')
export class AuthorityController {
  constructor(private readonly authorityService: AuthorityService) {}
  
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(Role.Admin)
  @Post()
  async create(@Body() authoritys: CreateAuthorityDto) {
    
    return await this.authorityService.create(authoritys);
  }

  @Get()
  async findAll(): Promise<authority[]> {
    return this.authorityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<authority> {
    return this.authorityService.findOne(id);
  }
 
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(Role.Admin)
  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() authority: authority): Promise<authority> {
    return this.authorityService.updateOne(id, authority);
  }

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<authority> {
    return this.authorityService.deleteOne(id);
  }
}


