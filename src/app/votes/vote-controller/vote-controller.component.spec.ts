import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteControllerComponent } from './vote-controller.component';

describe('VoteControllerComponent', () => {
  let component: VoteControllerComponent;
  let fixture: ComponentFixture<VoteControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
