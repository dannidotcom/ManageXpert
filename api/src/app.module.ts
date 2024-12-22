import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';
import { TeamModule } from './team/team.module';
import { NotificationModule } from './notification/notification.module';
import { ProjectModule } from './project/project.module';
import { WorkModule } from './work/work.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal:true
      }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    TaskModule,
    TeamModule,
    WorkModule,
    ProjectModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
