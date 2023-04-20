import { IsNotEmpty, IsString, isString } from 'class-validator';

export class VideoDto {
  @IsString()
  title
  @IsNotEmpty()
  @IsString()
  url: string;
}