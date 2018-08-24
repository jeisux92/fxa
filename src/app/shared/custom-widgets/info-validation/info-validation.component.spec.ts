import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoValidationComponent } from './info-validation.component';

describe('InfoValidationComponent', () => {
  let component: InfoValidationComponent;
  let fixture: ComponentFixture<InfoValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
