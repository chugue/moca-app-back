import { Module } from '@nestjs/common';
import { OpenHoursService } from './open-hours.service';
import { OpenHoursController } from './open-hours.controller';

@Module({
  controllers: [OpenHoursController],
  providers: [OpenHoursService],
})
export class OpenHoursModule {}
