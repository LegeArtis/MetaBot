import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsChatbotComponent } from './what-is-chatbot.component';

describe('WhatIsChatbotComponent', () => {
  let component: WhatIsChatbotComponent;
  let fixture: ComponentFixture<WhatIsChatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsChatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
