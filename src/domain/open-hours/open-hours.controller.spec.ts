import { Test, TestingModule } from '@nestjs/testing';
import { OpenHoursController } from './open-hours.controller';
import { OpenHoursService } from './open-hours.service';

describe('OpenHoursController', () => {
  let controller: OpenHoursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenHoursController],
      providers: [OpenHoursService],
    }).compile();

    controller = module.get<OpenHoursController>(OpenHoursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
