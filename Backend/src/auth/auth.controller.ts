import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { SigninDto } from "./dto";
import { AuthGuard } from "@nestjs/passport";


@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
    @UseGuards(AuthGuard('jwt'))
    @Get('getme')
    getMe(@Req() req:Request){
        const user = req['user'];
        return user;
    }

    @Post('signup')
    async signUp(@Body() dto:AuthDto):Promise<AuthDto>{
        return this.authService.create(dto);
    }


    @Post('signin')
    signIn(@Body() dto:SigninDto){
        return this.authService.signin(dto);
    }


}