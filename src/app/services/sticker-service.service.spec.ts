import { TestBed } from '@angular/core/testing';

import { StickerServiceService } from './sticker-service.service';

describe('StickerServiceService', () => {
  let service: StickerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
