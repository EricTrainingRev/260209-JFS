import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Http } from './http';

describe('Http', () => {
  let component: Http;
  let fixture: ComponentFixture<Http>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Http]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Http);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
