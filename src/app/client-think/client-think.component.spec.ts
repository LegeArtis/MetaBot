import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientThinkComponent } from './client-think.component';

describe('ClientThinkComponent', () => {
  let component: ClientThinkComponent;
  let fixture: ComponentFixture<ClientThinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientThinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
