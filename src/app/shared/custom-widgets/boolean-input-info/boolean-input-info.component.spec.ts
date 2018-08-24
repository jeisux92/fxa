import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanInputInfoComponent } from './boolean-input-info.component';

describe('BooleanInputInfoComponent', () => {
  let component: BooleanInputInfoComponent;
  let fixture: ComponentFixture<BooleanInputInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanInputInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanInputInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
