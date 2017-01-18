/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtListService } from './art-list.service';

describe('ArtListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtListService]
    });
  });

  it('should ...', inject([ArtListService], (service: ArtListService) => {
    expect(service).toBeTruthy();
  }));
});
