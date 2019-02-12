import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAddModalFormComponent } from './dish-add-modal-form.component';

describe('DishAddModalFormComponent', () => {
  let component: DishAddModalFormComponent;
  let fixture: ComponentFixture<DishAddModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishAddModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishAddModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
