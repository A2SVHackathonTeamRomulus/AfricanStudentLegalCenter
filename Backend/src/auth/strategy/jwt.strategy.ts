import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor(private prisma:PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'Africa',
    });
  }
  async validate(payload:{sub:number,email:string}){
    const user = await this.prisma.user.findUnique({
      where:{
        email:payload.email,
      }
    });
    delete user.password;
    return user;
  }
}