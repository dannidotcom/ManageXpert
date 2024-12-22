import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Tasks } from 'src/schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ResponseHelper } from 'src/common/helper/response-helper';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Tasks.name) private taskModel: Model<Tasks>) { }

    // Create a new task
    async create(createTaskDto: CreateTaskDto): Promise<any> {
        try {
            const createdTask = new this.taskModel(createTaskDto);
            const savedTask = await createdTask.save();
            return {
                message: 'Task created successfully',
                data: savedTask,
            };
        } catch (error) {
            return ResponseHelper.createErrorResponse(
                400,
                'Invalid task data',
                'task',
                'Ensure all required fields are properly filled.',
            );
        }
    }

    // Get all tasks
    async findAll(): Promise<Tasks[]> {
        return this.taskModel.find().exec();
    }

    // Get a single task by ID
    async findOne(id: string): Promise<Tasks> {
        
        const task = await this.taskModel.findById(id).exec();
        if (!task) {
            throw new NotFoundException({
                error: {
                    status: 404,
                    message: 'Task not found',
                    field: '_id',
                    suggestion: 'Verify the task ID and try again.',
                },
            });
        }

        return task;
    }

    // Update a task by ID
    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Tasks> {
        const updatedTask = await this.taskModel
            .findByIdAndUpdate(id, updateTaskDto, { new: true })
            .exec();
        if (!updatedTask) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return updatedTask;
    }

    // Remove a task by ID
    async remove(id: string): Promise<void> {
        const deletedTask = await this.taskModel.findByIdAndDelete(id).exec();
        if (!deletedTask) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
    }

}
