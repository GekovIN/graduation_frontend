import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddModalFormComponent } from './menu-add-modal-form.component';

describe('MenuAddModalFormComponent', () => {
  let component: MenuAddModalFormComponent;
  let fixture: ComponentFixture<MenuAddModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAddModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
