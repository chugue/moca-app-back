import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoModule } from './user-info/user-info.module';
import { ReviewModule } from './review/review.module';
import { StoreModule } from './store/store.module';
import { NotificationModule } from './notification/notification.module';
import { PhotoModule } from './photo/photo.module';
import { OpenHoursModule } from './open-hours/open-hours.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CommonModule, UserInfoModule, ReviewModule, StoreModule, NotificationModule, PhotoModule, OpenHoursModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
