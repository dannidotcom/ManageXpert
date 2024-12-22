import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Projects, ProjectsSchema } from 'src/schemas/project.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Projects.name, schema: ProjectsSchema}])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
