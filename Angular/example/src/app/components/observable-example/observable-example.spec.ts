import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observeable } from './observeable';

describe('Observeable', () => {
  let component: Observeable;
  let fixture: ComponentFixture<Observeable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observeable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observeable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
