import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValparaisoComponent } from './valparaiso.component';

describe('ValparaisoComponent', () => {
  let component: ValparaisoComponent;
  let fixture: ComponentFixture<ValparaisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValparaisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValparaisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
