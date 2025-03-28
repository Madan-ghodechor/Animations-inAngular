import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAnnimationsComponent } from './web-annimations.component';

describe('WebAnnimationsComponent', () => {
  let component: WebAnnimationsComponent;
  let fixture: ComponentFixture<WebAnnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebAnnimationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebAnnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
