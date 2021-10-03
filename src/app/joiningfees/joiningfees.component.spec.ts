import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningfeesComponent } from './joiningfees.component';

describe('JoiningfeesComponent', () => {
  let component: JoiningfeesComponent;
  let fixture: ComponentFixture<JoiningfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoiningfeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoiningfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
