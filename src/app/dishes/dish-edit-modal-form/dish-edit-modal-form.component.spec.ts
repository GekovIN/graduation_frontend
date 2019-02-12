import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishEditModalFormComponent } from './dish-edit-modal-form.component';

describe('DishEditModalFormComponent', () => {
  let component: DishEditModalFormComponent;
  let fixture: ComponentFixture<DishEditModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishEditModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishEditModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
