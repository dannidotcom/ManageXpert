import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './project-create.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
