import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraucaniaComponent } from './araucania.component';

describe('AraucaniaComponent', () => {
  let component: AraucaniaComponent;
  let fixture: ComponentFixture<AraucaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AraucaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AraucaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
