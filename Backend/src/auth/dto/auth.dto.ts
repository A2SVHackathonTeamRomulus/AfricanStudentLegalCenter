import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Interface } from "readline";

export class AuthDto{
    @IsNotEmpty()
    @IsString()
    name:string
    @IsEmail()
    email:string;
    @IsNotEmpty()
    @IsString()
    password:string
}

export class SigninDto{
    @IsEmail()
    email:string;
    @IsNotEmpty()
    @IsString()
    password:string
    
}