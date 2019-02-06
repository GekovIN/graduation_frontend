import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListByDateComponent } from './menu-list-by-date.component';

describe('MenuListByDateComponent', () => {
  let component: MenuListByDateComponent;
  let fixture: ComponentFixture<MenuListByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
