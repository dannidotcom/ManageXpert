import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Projects>;

@Schema()
export class Projects {
    
}

export const CatSchema = SchemaFactory.createForClass(Projects);