import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSuccessComponent } from './review-success.component';

describe('ReviewSuccessComponent', () => {
  let component: ReviewSuccessComponent;
  let fixture: ComponentFixture<ReviewSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
