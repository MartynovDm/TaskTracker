import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerSelectorComponent } from './datepicker-selector.component';

describe('DatepickerSelectorComponent', () => {
  let component: DatepickerSelectorComponent;
  let fixture: ComponentFixture<DatepickerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
