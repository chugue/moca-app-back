import { Injectable } from '@nestjs/common';
import { CreateOpenHourDto } from './dto/create-open-hour.dto';
import { UpdateOpenHourDto } from './dto/update-open-hour.dto';

@Injectable()
export class OpenHoursService {
  create(createOpenHourDto: CreateOpenHourDto) {
    return 'This action adds a new openHour';
  }

  findAll() {
    return `This action returns all openHours`;
  }

  findOne(id: number) {
    return `This action returns a #${id} openHour`;
  }

  update(id: number, updateOpenHourDto: UpdateOpenHourDto) {
    return `This action updates a #${id} openHour`;
  }

  remove(id: number) {
    return `This action removes a #${id} openHour`;
  }
}
