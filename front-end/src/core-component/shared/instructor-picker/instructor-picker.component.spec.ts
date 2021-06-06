import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorPickerComponent } from './instructor-picker.component';

describe('InstructorPickerComponent', () => {
  let component: InstructorPickerComponent;
  let fixture: ComponentFixture<InstructorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
