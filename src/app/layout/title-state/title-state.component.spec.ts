import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleStateComponent } from './title-state.component';

describe('TitleStateComponent', () => {
  let component: TitleStateComponent;
  let fixture: ComponentFixture<TitleStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
