import { members_gender } from "@prisma/client";
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  name:string;

  @IsEnum(members_gender)
  @IsOptional()
  gender: members_gender;

  @IsNotEmpty()
  @IsDate()
  birth_date: Date;
}
