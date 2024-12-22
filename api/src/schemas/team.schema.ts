import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeamsDocument = HydratedDocument<Teams>;

@Schema({ timestamps: true })
export class Teams {
    
}

export const TeamsSchema = SchemaFactory.createForClass(Teams);