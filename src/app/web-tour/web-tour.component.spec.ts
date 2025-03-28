import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTourComponent } from './web-tour.component';

describe('WebTourComponent', () => {
  let component: WebTourComponent;
  let fixture: ComponentFixture<WebTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
