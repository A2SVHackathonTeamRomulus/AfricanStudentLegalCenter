import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsDto } from './dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  async findAll() {
    return this.contactsService.findAll();
  }

  @Post()
  async postContacts(@Body() dto:ContactsDto):Promise<ContactsDto|any>{
    return this.contactsService.create(dto);
  }
}