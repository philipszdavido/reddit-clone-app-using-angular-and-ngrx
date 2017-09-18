import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlinkComponent } from './addlink.component';

describe('AddlinkComponent', () => {
  let component: AddlinkComponent;
  let fixture: ComponentFixture<AddlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
