import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletFour } from './outlet-four';

describe('OutletFour', () => {
  let component: OutletFour;
  let fixture: ComponentFixture<OutletFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletFour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
