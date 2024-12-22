import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Projects } from 'src/schemas/project.schema';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateProjectDto } from './dto/project-create.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateprojectDTo: UpdateProjectDto) {
    return this.projectService.update(+id, updateprojectDTo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}