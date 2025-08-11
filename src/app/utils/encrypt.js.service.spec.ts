import { TestBed } from '@angular/core/testing';

import { EncryptJsService } from './encrypt.js.service';

describe('EncryptJsService', () => {
  let service: EncryptJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
