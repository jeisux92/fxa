import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionValidationComponent } from './rejection-validation.component';

describe('RejectionValidationComponent', () => {
  let component: RejectionValidationComponent;
  let fixture: ComponentFixture<RejectionValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectionValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectionValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
