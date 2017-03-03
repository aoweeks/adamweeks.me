/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CodeListService } from './code-list.service';

describe('CodeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeListService]
    });
  });

  it('should ...', inject([CodeListService], (service: CodeListService) => {
    expect(service).toBeTruthy();
  }));
});
