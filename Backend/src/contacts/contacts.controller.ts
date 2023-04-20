
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body()  dto: any): Promise<ContactsDto|any> {
    return this.contactsService.create(dto);
  }

  @Get()
  async findAll(): Promise<ContactsDto[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ContactsDto> {
    return this.contactsService.findOne(Number(id));
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: string, @Body() updateContactDto: ContactsDto):  Promise<{success:true,data:ContactsDto} | { success: false, message: string }>  {
    return this.contactsService.update(Number(id), updateContactDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id:string):  Promise<{success:true,data:ContactsDto} | { success: false, message: string }> {
    return this.contactsService.remove(Number(id));
  }
}


// @Controller('contacts')
// export class ContactsController {
//   constructor(private readonly contactsService: ContactsService) {}

//   @Get()
//   async findAll() {
//     return this.contactsService.findAll();
//   }

//   @Post()
//   async postContacts(@Body() dto:ContactsDto):Promise<ContactsDto|any>{
//     return this.contactsService.create(dto);
//   }
// }