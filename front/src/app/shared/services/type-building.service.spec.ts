import { TestBed } from '@angular/core/testing';

import { TypeBuildingService } from './type-building.service';

describe('TypeBuildingService', () => {
  let service: TypeBuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeBuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
