import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAddModalFormComponent } from './restaurant-add-modal-form.component';

describe('RestaurantAddModalFormComponent', () => {
  let component: RestaurantAddModalFormComponent;
  let fixture: ComponentFixture<RestaurantAddModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAddModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAddModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
