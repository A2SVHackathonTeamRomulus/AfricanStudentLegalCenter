
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsDto } from './dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() createContactDto: ContactsDto): Promise<ContactsDto> {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  async findAll(): Promise<ContactsDto[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ContactsDto> {
    return this.contactsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateContactDto: ContactsDto): Promise<ContactsDto> {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<ContactsDto> {
    return this.contactsService.remove(id);
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