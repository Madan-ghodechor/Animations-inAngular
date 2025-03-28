import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionTrackingSvgComponent } from './motion-tracking-svg.component';

describe('MotionTrackingSvgComponent', () => {
  let component: MotionTrackingSvgComponent;
  let fixture: ComponentFixture<MotionTrackingSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotionTrackingSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotionTrackingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
