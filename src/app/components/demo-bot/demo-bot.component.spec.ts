import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBotComponent } from './demo-bot.component';

describe('DemoBotComponent', () => {
  let component: DemoBotComponent;
  let fixture: ComponentFixture<DemoBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
