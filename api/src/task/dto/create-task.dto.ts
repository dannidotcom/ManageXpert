import { IsString, IsArray, IsOptional, IsEnum, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTaskDto {
    @IsMongoId()
    @Type(() => String)
    projectId: string;

    @IsOptional()
    @IsString()
    workId?: string;

    @IsString()
    task: string;

    @IsString()
    start_date: string;

    @IsString()
    end_date: string;

    @IsArray()
    @IsMongoId({ each: true })
    @Type(() => String)
    members: string[];

    @IsOptional()
    @IsString()
    status?: string;
}
