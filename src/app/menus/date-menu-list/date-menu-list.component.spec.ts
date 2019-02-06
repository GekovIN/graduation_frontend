import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMenuListComponent } from './date-menu-list.component';

describe('DateMenuListComponent', () => {
  let component: DateMenuListComponent;
  let fixture: ComponentFixture<DateMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
