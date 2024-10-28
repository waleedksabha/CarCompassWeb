import { TestBed } from '@angular/core/testing';

import { CarCompassSearchServiceService } from './car-compass-search-service.service';

describe('CarCompassSearchServiceService', () => {
  let service: CarCompassSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCompassSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
