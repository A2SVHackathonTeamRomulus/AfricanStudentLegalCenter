import { Body, ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import *  as argon from "argon2";
import { AuthDto, SigninDto } from "./dto";
import { JwtService } from "@nestjs/jwt";




@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService,private jwt:JwtService) {}

  async findAll(): Promise<AuthDto[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: number): Promise<AuthDto> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: { name?: string;email: string;  password?: string }): Promise<AuthDto|any> {


    try {
      const {name,email, password } = data;
      const existingUser = await this.prisma.user.findUnique({ where: { email } });
  
      if (existingUser) {
        return { message: 'User with this email already exists' };
      }
  
      const hash = await argon.hash(data.password);
  
      const user = await this.prisma.user.create({
        data:{
          name:data.name,
          email:data.email,
          password:hash
        }
      });
  
      delete user.password;
  
      return this.signToken(user.id,user.email); 
    } catch (error) {
      throw error;
    }
   
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


  async signin(dto:SigninDto){
    const user = await this.prisma.user.findUnique({
      where:{email:dto.email}
    })
    if (!user){
      throw new ForbiddenException("Incorrect credentials");
    }
    const pwmatches = await argon.verify(user.password,dto.password);
    if (!pwmatches){
      throw new ForbiddenException("Incorrect Credentials");
    }
    return this.signToken(user.id,user.email);
  }

  async signToken(userId:number,email:string){
    const payload ={
      sub:userId,
      email,
    }
    const token = await this.jwt.signAsync(payload,{
      expiresIn:'2h',
      secret:'Africa'
    })

    return {access_token:token}

  }
}

