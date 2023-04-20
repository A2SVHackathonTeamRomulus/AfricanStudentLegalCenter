import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import *  as argon from "argon2";
import { AuthDto } from "./dto";
import { PrismaClient } from '@prisma/client'



@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<AuthDto[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: number): Promise<AuthDto> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: { email: string; name?: string; password?: string }): Promise<AuthDto|any> {
    const { email, name, password } = data;
    const existingUser = await this.prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return { message: 'User with this email already exists' };
    }

    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }

  async update(id: number, data: { email?: string; name?: string; password?: string }): Promise<AuthDto|{message:string}> {
    const { email, name, password } = data;
    const existingUser = await this.prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return { message: 'User with this id is not found' };
    }
    const updateduser = await this.prisma.user.update({
      where: { id },
      data,
    });

    return updateduser;
  }

  async delete(id: number): Promise<AuthDto|{message:string}> {
    const existingUser = await this.prisma.user.findUnique({ where: {id} });

    if (!existingUser) {
      return { message: 'User with this id is not found' };
    }
    const deleteduser = await this.prisma.user.delete({
      where: { id },
    });
    return deleteduser;
  }


  async signin(){
    return "it is working";
  }
}

