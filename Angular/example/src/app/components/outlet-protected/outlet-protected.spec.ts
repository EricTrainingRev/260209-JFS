import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletProtected } from './outlet-protected';

describe('OutletProtected', () => {
  let component: OutletProtected;
  let fixture: ComponentFixture<OutletProtected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletProtected]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletProtected);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
