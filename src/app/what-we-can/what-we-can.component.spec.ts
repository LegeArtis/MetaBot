import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeCanComponent } from './what-we-can.component';

describe('WhatWeCanComponent', () => {
  let component: WhatWeCanComponent;
  let fixture: ComponentFixture<WhatWeCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
