import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Notifications>;

@Schema()
export class Notifications {
    
}

export const CatSchema = SchemaFactory.createForClass(Notifications);