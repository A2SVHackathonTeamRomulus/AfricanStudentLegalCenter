import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Contacts } from '.prisma/client';
import { ContactsDto } from './dto';


@Injectable()
export class ContactsService {
  constructor(private  prisma: PrismaService) {}

  async create(authorityContactData: {
    country: string;
    sector: string;
    phone: string;
  }): Promise<Contacts> {
    const { country, sector, phone} = authorityContactData;
    return this.prisma.contacts.create({
      data: {
        country,
        sector,
        phone,
      },
    });
  }

  async findAll(): Promise<ContactsDto|any> {
    const contacts = await this.prisma.contacts.findMany();
    return contacts;
  }

  async findOne(id: number): Promise<ContactsDto|any> {
    const contact = await this.prisma.contacts.findUnique({
      where: {
        id,
      },
    });
    return contact;
  }
  

  async update(id: number, dto: ContactsDto): Promise<ContactsDto> {
    const { country,sector, phone} = dto;
    const updatedcontact =  await this.prisma.contacts.update({
      where: {
        id,
      },
      data: {
        country,
        sector,
        phone,
      },
    });
    return updatedcontact;
    
  }

  async remove(id: number): Promise<ContactsDto> {
    return this.prisma.contacts.delete({
      where: {
        id,
      },
    });
  }
}
