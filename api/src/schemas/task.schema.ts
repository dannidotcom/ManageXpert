import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Projects } from './project.schema';
import { Users } from './user.schema';

export type TasksDocument = HydratedDocument<Tasks>;

@Schema({ timestamps: true })
export class Tasks {
    @Prop({ type: mongoose.Types.ObjectId, ref: 'Project', required: true })
    projectId: Projects;

    @Prop({ type: String })
    workId: string;

    @Prop({ type: String, required: true })
    task: string;

    @Prop({ type: String, required: true, default: '' })
    start_date: string;

    @Prop({ type: String, required: true, default: '' })
    end_date: string;

    @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Users' }], default: [] })
    members: Users[];

    @Prop({ type: String, default: 'Working' })
    status: string;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);