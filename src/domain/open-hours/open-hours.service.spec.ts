import { Test, TestingModule } from '@nestjs/testing';
import { OpenHoursService } from './open-hours.service';

describe('OpenHoursService', () => {
  let service: OpenHoursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenHoursService],
    }).compile();

    service = module.get<OpenHoursService>(OpenHoursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
