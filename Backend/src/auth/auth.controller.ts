import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
    @Post('signup')
    async signUp(@Body() dto:AuthDto):Promise<AuthDto>{
        return this.authService.create(dto);
    }
    @Post('signin')
    signIn(){
        return this.authService.signin();
    }


}