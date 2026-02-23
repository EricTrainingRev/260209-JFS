import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletOne } from './outlet-one';

describe('OutletOne', () => {
  let component: OutletOne;
  let fixture: ComponentFixture<OutletOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
