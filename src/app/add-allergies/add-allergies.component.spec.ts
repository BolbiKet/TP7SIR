import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllergiesComponent } from './add-allergies.component';

describe('AddAllergiesComponent', () => {
  let component: AddAllergiesComponent;
  let fixture: ComponentFixture<AddAllergiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAllergiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
