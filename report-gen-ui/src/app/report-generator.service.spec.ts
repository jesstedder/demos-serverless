import { TestBed } from '@angular/core/testing';

import { ReportGeneratorService } from './report-generator.service';

describe('ReportGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportGeneratorService = TestBed.get(ReportGeneratorService);
    expect(service).toBeTruthy();
  });
});
