import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Projects, ProjectsDocument } from 'src/schemas/project.schema';
import { CreateProjectDto } from './dto/project-create.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Projects.name) private projectModel: Model<ProjectsDocument>,
    ) { }

    async create(createProjectDto: CreateProjectDto): Promise<Projects> {
        const createdProject = new this.projectModel(createProjectDto);
        return createdProject.save();
    }

    async findAll(): Promise<Projects[]> {
        return this.projectModel.find().exec();
    }

    async findOne(id: number) {
        return `This action returns a #${id} task`;
    }

    async update(id: number, updateProjectDto: UpdateProjectDto) {
        return `This action updates a #${id} task`;
    }

    async remove(id: number) {
        return `This action removes a #${id} task`;
    }
}
