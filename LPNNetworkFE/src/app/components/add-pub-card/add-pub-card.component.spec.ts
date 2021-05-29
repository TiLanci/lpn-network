import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPubCardComponent } from './add-pub-card.component';

describe('AddPubCardComponent', () => {
  let component: AddPubCardComponent;
  let fixture: ComponentFixture<AddPubCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPubCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
