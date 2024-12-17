import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Users>;

@Schema()
export class Users {
    
}

export const CatSchema = SchemaFactory.createForClass(Users);