import { TestBed } from '@angular/core/testing';

import { CatagorysService } from './catagorys.service';

describe('CatagorysService', () => {
  let service: CatagorysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatagorysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
