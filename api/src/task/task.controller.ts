import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { ObjectIdValidationPipe } from 'src/common/pipes/object-id-validation.pipe';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Body() createCatDto: CreateTaskDto) {
    return this.taskService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ObjectIdValidationPipe) id: string) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateTaskDto) {
    return this.taskService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
