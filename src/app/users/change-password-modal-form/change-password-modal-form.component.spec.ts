import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordModalFormComponent } from './change-password-modal-form.component';

describe('ChangePasswordModalFormComponent', () => {
  let component: ChangePasswordModalFormComponent;
  let fixture: ComponentFixture<ChangePasswordModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
