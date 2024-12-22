import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectsDocument = HydratedDocument<Projects>;

@Schema({timestamps: true})
export class Projects {
    
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);