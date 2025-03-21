import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MembersService {
  constructor(private db: PrismaService) {}

  create(createMemberDto: CreateMemberDto) {
    return this.db.members.create({
      data: createMemberDto
    })
  }

  findAll() {
    return this.db.members.findMany({
      select: {
        id: true,
        name: true,         
        gender: true,
        birth_date: true,  
        banned: true,
        created_at: true,     
        updated_at: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
