import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotelinkComponent } from './votelink.component';

describe('VotelinkComponent', () => {
  let component: VotelinkComponent;
  let fixture: ComponentFixture<VotelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
