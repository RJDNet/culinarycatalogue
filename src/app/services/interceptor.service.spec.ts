// General/Testing Imports
import { TestBed } from '@angular/core/testing';

// Required Module/Component Imports
import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  // Unit Tests
  describe('creation test', () => {
    it('should be created', () => {
      const service: InterceptorService = TestBed.get(InterceptorService);
      expect(service).toBeTruthy();
    });
  });
});
