import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { logListResolver } from './log-list.resolver';

describe('logListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => logListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
