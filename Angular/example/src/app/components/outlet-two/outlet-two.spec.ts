import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletTwo } from './outlet-two';

describe('OutletTwo', () => {
  let component: OutletTwo;
  let fixture: ComponentFixture<OutletTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
