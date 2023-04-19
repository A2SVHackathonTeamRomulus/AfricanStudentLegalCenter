import { IsNotEmpty, IsString } from "class-validator";


export class signupDto{
      @IsString()
      @IsNotEmpty()
      public name: string;

      

      @IsString()
      @IsNotEmpty()
      public password: string;

      @IsString()
      @IsNotEmpty()
      public email: string;

      @IsString()
      public role: string;
}

