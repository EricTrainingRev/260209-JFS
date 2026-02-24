import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectExample } from './subject-example';

describe('SubjectExample', () => {
  let component: SubjectExample;
  let fixture: ComponentFixture<SubjectExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
