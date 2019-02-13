import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEditModalFormComponent } from './menu-edit-modal-form.component';

describe('MenuEditModalFormComponent', () => {
  let component: MenuEditModalFormComponent;
  let fixture: ComponentFixture<MenuEditModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEditModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEditModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
