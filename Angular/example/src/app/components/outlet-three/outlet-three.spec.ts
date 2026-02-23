import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletThree } from './outlet-three';

describe('OutletThree', () => {
  let component: OutletThree;
  let fixture: ComponentFixture<OutletThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
