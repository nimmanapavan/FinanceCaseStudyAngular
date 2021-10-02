import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationhomepageComponent } from './applicationhomepage.component';

describe('ApplicationhomepageComponent', () => {
  let component: ApplicationhomepageComponent;
  let fixture: ComponentFixture<ApplicationhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
