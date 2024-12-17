import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Works>;

@Schema()
export class Works {
    
}

export const CatSchema = SchemaFactory.createForClass(Works);