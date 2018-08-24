import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsValidationComponent } from './politics-validation.component';

describe('PoliticsValidationComponent', () => {
  let component: PoliticsValidationComponent;
  let fixture: ComponentFixture<PoliticsValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticsValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
