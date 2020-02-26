import { TestBed } from '@angular/core/testing';

import { ApiPhotosService } from './api-photos.service';

describe('ApiPhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPhotosService = TestBed.get(ApiPhotosService);
    expect(service).toBeTruthy();
  });
});
