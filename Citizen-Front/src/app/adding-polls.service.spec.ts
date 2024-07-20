import { TestBed } from '@angular/core/testing';

import { AddingPollsService } from './adding-polls.service';

describe('AddingPollsService', () => {
  let service: AddingPollsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddingPollsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
