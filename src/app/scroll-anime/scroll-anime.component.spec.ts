import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollAnimeComponent } from './scroll-anime.component';

describe('ScrollAnimeComponent', () => {
  let component: ScrollAnimeComponent;
  let fixture: ComponentFixture<ScrollAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
