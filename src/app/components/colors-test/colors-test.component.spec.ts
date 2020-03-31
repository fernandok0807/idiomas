import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsTestComponent } from './colors-test.component';

describe('ColorsTestComponent', () => {
  let component: ColorsTestComponent;
  let fixture: ComponentFixture<ColorsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
