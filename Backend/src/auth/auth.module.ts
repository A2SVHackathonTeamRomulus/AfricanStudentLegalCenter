import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Module({
    controllers:[AuthController],
    providers:[AuthService,JwtStrategy,PrismaService,JwtService]
})
export class AuthModule{
    
}
