import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCompassSearchComponent } from './car-compass-search.component';

describe('CarCompassSearchComponent', () => {
  let component: CarCompassSearchComponent;
  let fixture: ComponentFixture<CarCompassSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCompassSearchComponent ]
    })
    .compileComponents();
  }); 

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCompassSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
