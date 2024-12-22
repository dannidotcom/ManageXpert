import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorksDocument = HydratedDocument<Works>;

@Schema({ timestamps: true })
export class Works {
    
}

export const WorksSchema = SchemaFactory.createForClass(Works);