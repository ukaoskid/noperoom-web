import { TestBed } from '@angular/core/testing';

import { ChatMessageRouterService } from './chat-message-router.service';

describe('ChatMessageRouterService', () => {
  let service: ChatMessageRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatMessageRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
