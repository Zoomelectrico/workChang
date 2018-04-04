import { TestBed, inject } from '@angular/core/testing';

import { UploadImgService } from './upload-img.service';

describe('UploadImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadImgService]
    });
  });

  it('should be created', inject([UploadImgService], (service: UploadImgService) => {
    expect(service).toBeTruthy();
  }));
});
