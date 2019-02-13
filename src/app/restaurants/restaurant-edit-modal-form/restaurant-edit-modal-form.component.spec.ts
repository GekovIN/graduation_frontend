import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantEditModalFormComponent } from './restaurant-edit-modal-form.component';

describe('RestaurantEditModalFormComponent', () => {
  let component: RestaurantEditModalFormComponent;
  let fixture: ComponentFixture<RestaurantEditModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantEditModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantEditModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
