import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingAnimationComponent } from './heading-animation.component';

describe('HeadingAnimationComponent', () => {
  let component: HeadingAnimationComponent;
  let fixture: ComponentFixture<HeadingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadingAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
