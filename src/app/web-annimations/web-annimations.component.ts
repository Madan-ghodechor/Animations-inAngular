import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-web-annimations',
  standalone: false,
  templateUrl: './web-annimations.component.html',
  styleUrl: './web-annimations.component.scss'
})
export class WebAnnimationsComponent implements AfterViewInit {

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

    // Scaling animation on hover
    gsap.to(".animate-me", {
      scale: 1.2,
      duration: 0.5,
      paused: true,
      ease: "power2.inOut",
      onStart: function () {
        console.log('Scaling started');
      },
      onComplete: function () {
        console.log('Scaling completed');
      }
    });

  }
  // Method to scale an element
  scaleElement() {
    gsap.to(".animate-me", {
      scale: 1.5,
      duration: 0.5,
      ease: "elastic.out(1, 0.75)"
    });
  }

  // Method to rotate an element
  rotateElement() {
    gsap.to(".animate-me", {
      rotation: 360,
      duration: 2,
      ease: "power4.out"
    });
  }

  // Method to fade in/out the element
  fadeElement() {
    gsap.to(".animate-me", {
      opacity: 0, // Fade out
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Revert back to the original opacity after fading out
        gsap.to(".animate-me", { opacity: 1, duration: 1 });
      }
    });
  }

  // Method for a bouncing effect
  bounceElement() {
    gsap.to(".animate-me", {
      scale: 1.2,
      y: -30,
      duration: 0.2,
      ease: "bounce.out",
      repeat: 1, // Repeat once for bounce effect
      yoyo: true // Make it bounce back
    });
  }

  // Method for changing background color
  changeBackgroundColor() {
    gsap.to(".animate-me", {
      backgroundColor: "#ff6347",  // Tomato color
      duration: 1,
      ease: "power2.inOut"
    });
  }

  // Method to animate multiple elements with stagger effect
  staggerElements() {
    gsap.from(".stagger-item", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    });
  }
}
