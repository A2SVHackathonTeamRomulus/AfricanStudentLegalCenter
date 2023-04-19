import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Interface } from "readline";

export class ContactsDto{
    @IsNotEmpty()
    @IsString()
    country:string
    @IsNotEmpty()
    @IsString()
    sector:string
    @IsNotEmpty()
    @IsString()
    phone:string

}