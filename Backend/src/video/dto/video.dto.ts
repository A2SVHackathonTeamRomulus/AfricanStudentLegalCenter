import { IsNotEmpty, IsString } from 'class-validator';

export class VideoDto {
  @IsNotEmpty()
  @IsString()
  url: string;
}