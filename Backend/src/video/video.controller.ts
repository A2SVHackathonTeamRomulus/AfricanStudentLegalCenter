import { Controller,  UseInterceptors, BadRequestException, UploadedFile, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination:"./uploads",
            filename:(req,file,cb) => {
                const name = file.originalname.split('.')[0]
                const fileExtension = file.originalname.split('.')[1]
                const newFileName = name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension

                cb(null, newFileName)
            }
        }),
        fileFilter: (req,file,cb)=>{
            if(!file.originalname.match(/\.(jpeg|jpg|png|gif|py)$/)){
                 cb(null,true)

            }
            cb(null,true)

        }
    }))

  create(@Body() createVideoDto: CreateVideoDto, @UploadedFile('file') file:Express.Multer.File) {
    
    if (!file){
      throw new BadRequestException("File is not appropriate")
  } else {

      const filePathURL = `http://localhost:3000/video/vids/${file.filename}`
      this.videoService.create(createVideoDto,filePathURL )
  }
}
@Get('vids/:filename')
    async viewTheFile(@Param('filename') filename, @Res() res:Response): Promise<void> {
        return await res.sendFile(filename,{root: './uploads'})
    } 

    
  @Get()
  findAll() {
    return this.videoService.findAll();
    
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.videoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(id, updateVideoDto)
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoService.remove(id);
  }
}
