import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notifications, NotificationsSchema } from 'src/schemas/notification.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Notifications.name, schema: NotificationsSchema}])],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
