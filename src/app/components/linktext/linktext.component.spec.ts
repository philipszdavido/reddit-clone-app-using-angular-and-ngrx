import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktextComponent } from './linktext.component';

describe('LinktextComponent', () => {
  let component: LinktextComponent;
  let fixture: ComponentFixture<LinktextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
