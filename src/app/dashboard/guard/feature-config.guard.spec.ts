import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { featureConfigGuard } from './feature-config.guard';

describe('featureConfigGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => featureConfigGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
