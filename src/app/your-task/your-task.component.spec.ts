import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTaskComponent } from './your-task.component';

describe('YourTaskComponent', () => {
  let component: YourTaskComponent;
  let fixture: ComponentFixture<YourTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
