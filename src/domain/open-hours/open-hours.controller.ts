import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpenHoursService } from './open-hours.service';
import { CreateOpenHourDto } from './dto/create-open-hour.dto';
import { UpdateOpenHourDto } from './dto/update-open-hour.dto';

@Controller('open-hours')
export class OpenHoursController {
  constructor(private readonly openHoursService: OpenHoursService) {}

  @Post()
  create(@Body() createOpenHourDto: CreateOpenHourDto) {
    return this.openHoursService.create(createOpenHourDto);
  }

  @Get()
  findAll() {
    return this.openHoursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openHoursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpenHourDto: UpdateOpenHourDto) {
    return this.openHoursService.update(+id, updateOpenHourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openHoursService.remove(+id);
  }
}
