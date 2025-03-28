import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-snap-scroll',
  standalone: false,

  templateUrl: './snap-scroll.component.html',
  styleUrl: './snap-scroll.component.scss'
})
export class SnapScrollComponent implements AfterViewInit {


  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  ngAfterViewInit(): void {
    // Ensure that the animation and scroll trigger are initialized after the view is fully loaded

    // Set GSAP to start with each list item at the right scale and opacity
    gsap.set("li > span", { transformOrigin: "0 50%" });
    gsap.set("li:not(:first-of-type) span", { opacity: 0.2, scale: 0.8 });

    const tl = gsap.timeline()
      .to("li:not(:first-of-type) span", { opacity: 1, scale: 1, stagger: 0.5 })
      .to("li:not(:last-of-type) span", { opacity: 0.2, scale: 0.8, stagger: 0.5 }, 0);

    // Set up ScrollTrigger for the scroll-snap functionality
    ScrollTrigger.create({
      trigger: "h1",
      start: "center center",
      endTrigger: "li:last-of-type",
      end: "center center",
      pin: true,
      scrub: true,
      markers: true,
      animation: tl
    });
  }
}
