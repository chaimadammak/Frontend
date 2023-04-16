import { TestBed } from '@angular/core/testing';

import { JobCategoryServiceService } from './job-category-service.service';

describe('JobCategoryServiceService', () => {
  let service: JobCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
