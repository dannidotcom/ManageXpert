import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Teams>;

@Schema()
export class Teams {
    
}

export const CatSchema = SchemaFactory.createForClass(Teams);