import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletFive } from './outlet-five';

describe('OutletFive', () => {
  let component: OutletFive;
  let fixture: ComponentFixture<OutletFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletFive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
