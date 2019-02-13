import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditModalFormComponent } from './user-edit-modal-form.component';

describe('UserEditModalFormComponent', () => {
  let component: UserEditModalFormComponent;
  let fixture: ComponentFixture<UserEditModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
