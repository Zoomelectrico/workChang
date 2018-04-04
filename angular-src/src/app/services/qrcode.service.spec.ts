import { TestBed, inject } from '@angular/core/testing';

import { QrcodeService } from './qrcode.service';

describe('QrcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrcodeService]
    });
  });

  it('should be created', inject([QrcodeService], (service: QrcodeService) => {
    expect(service).toBeTruthy();
  }));
});
