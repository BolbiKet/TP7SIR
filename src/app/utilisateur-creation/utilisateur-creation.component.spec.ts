import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurCreationComponent } from './utilisateur-creation.component';

describe('UtilisateurCreationComponent', () => {
  let component: UtilisateurCreationComponent;
  let fixture: ComponentFixture<UtilisateurCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
