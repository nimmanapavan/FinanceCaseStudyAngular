import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoapproveComponent } from './userstoapprove.component';

describe('UserstoapproveComponent', () => {
  let component: UserstoapproveComponent;
  let fixture: ComponentFixture<UserstoapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstoapproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
