import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyOnCoursesComponent } from './apply-on-courses.component';

describe('ApplyOnCoursesComponent', () => {
  let component: ApplyOnCoursesComponent;
  let fixture: ComponentFixture<ApplyOnCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyOnCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyOnCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
