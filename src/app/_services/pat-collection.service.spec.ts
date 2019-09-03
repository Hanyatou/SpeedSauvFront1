import { TestBed } from '@angular/core/testing';

import { PatCollectionService } from './pat-collection.service';

describe('PatCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatCollectionService = TestBed.get(PatCollectionService);
    expect(service).toBeTruthy();
  });
});
