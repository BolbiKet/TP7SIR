import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageCreationComponent } from './sondage-creation.component';

describe('SondageCreationComponent', () => {
  let component: SondageCreationComponent;
  let fixture: ComponentFixture<SondageCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondageCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
