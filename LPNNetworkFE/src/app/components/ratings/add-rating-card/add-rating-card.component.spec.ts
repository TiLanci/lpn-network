import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRatingCardComponent } from './add-rating-card.component';

describe('AddRatingCardComponent', () => {
  let component: AddRatingCardComponent;
  let fixture: ComponentFixture<AddRatingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRatingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
