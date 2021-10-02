import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingfeeComponent } from './processingfee.component';

describe('ProcessingfeeComponent', () => {
  let component: ProcessingfeeComponent;
  let fixture: ComponentFixture<ProcessingfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingfeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
