import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Works, WorksSchema } from 'src/schemas/work.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Works.name, schema: WorksSchema }])],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule { }
