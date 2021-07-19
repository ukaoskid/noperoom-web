import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWriteComponent } from './chat-write.component';

describe('ChatWriteComponent', () => {
  let component: ChatWriteComponent;
  let fixture: ComponentFixture<ChatWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
