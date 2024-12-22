import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NotificationsDocument = HydratedDocument<Notifications>;

@Schema({ timestamps: true })
export class Notifications {
    
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);