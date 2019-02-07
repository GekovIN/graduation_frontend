import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteListByDateComponent } from './vote-list-by-date.component';

describe('VoteListByDateComponent', () => {
  let component: VoteListByDateComponent;
  let fixture: ComponentFixture<VoteListByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteListByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteListByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
