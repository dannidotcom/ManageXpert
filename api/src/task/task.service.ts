import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tasks } from 'src/schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Tasks.name) private taskModel: Model<Tasks>) { }

    async create(createTaskDto: CreateTaskDto): Promise<Tasks> {
        const createdCat = new this.taskModel(createTaskDto);
        return createdCat.save();
    }

    async findAll(): Promise<Tasks[]> {
        return this.taskModel.find().exec();
    }

    async findOne(id: number) {
        return `This action returns a #${id} task`;
    }

    async update(id: number, updateTaskDto: UpdateTaskDto) {
        return `This action updates a #${id} task`;
    }

    async remove(id: number) {
        return `This action removes a #${id} task`;
    }

}
