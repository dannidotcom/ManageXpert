import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teams, TeamsSchema } from 'src/schemas/team.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Teams.name, schema: TeamsSchema}])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
