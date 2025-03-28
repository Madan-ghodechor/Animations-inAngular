import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Optimized animation using GSAP
    gsap.fromTo(".animate-me",
      {
        opacity: 0,
        x: -100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
      }
    );

    // Example of animating multiple items with stagger
    gsap.from(".stagger-item", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.4
    });
  }
}
