import { IsString, IsOptional, IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';

class ToolDto {
  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon: string;
}

class MemberDto {
  @IsNotEmpty()
  id: mongoose.Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsOptional()
  access: string = 'View Only';
}

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsString()
  @IsOptional()
  img?: string;

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsArray()
  @IsOptional()
  works?: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ToolDto)
  @IsOptional()
  tools?: ToolDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MemberDto)
  @IsOptional()
  members?: MemberDto[];
}
