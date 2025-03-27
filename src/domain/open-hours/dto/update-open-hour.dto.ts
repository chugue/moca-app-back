import { PartialType } from '@nestjs/swagger';
import { CreateOpenHourDto } from './create-open-hour.dto';

export class UpdateOpenHourDto extends PartialType(CreateOpenHourDto) {}
