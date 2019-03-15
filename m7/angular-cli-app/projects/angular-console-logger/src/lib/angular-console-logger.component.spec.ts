import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConsoleLoggerComponent } from './angular-console-logger.component';

describe('AngularConsoleLoggerComponent', () => {
  let component: AngularConsoleLoggerComponent;
  let fixture: ComponentFixture<AngularConsoleLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularConsoleLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConsoleLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
