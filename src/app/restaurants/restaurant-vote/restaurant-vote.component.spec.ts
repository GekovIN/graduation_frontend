import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantVoteComponent } from './restaurant-vote.component';

describe('RestaurantVoteComponent', () => {
  let component: RestaurantVoteComponent;
  let fixture: ComponentFixture<RestaurantVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
