import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodrequestComponent } from './bloodrequest.component';

describe('BloodrequestComponent', () => {
  let component: BloodrequestComponent;
  let fixture: ComponentFixture<BloodrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
