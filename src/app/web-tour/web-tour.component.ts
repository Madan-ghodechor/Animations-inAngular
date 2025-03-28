import { Component, OnInit } from '@angular/core';
import Shepherd from 'shepherd.js';


@Component({
  selector: 'app-web-tour',
  standalone: false,

  templateUrl: './web-tour.component.html',
  styleUrl: './web-tour.component.scss'
})
export class WebTourComponent implements OnInit {

  ngOnInit(): void { }

  startTour(): void {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
    });

    // Step 1: Introduction to the website (e.g., home button)
    tour.addStep({
      id: 'step-1',
      text: 'Welcome to our website! This is the homepage.',
      attachTo: {
        element: '.logo',
        on: 'bottom'           // Position the tooltip on the bottom of the target element
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next
        },
        {
          text: 'back',
          action: tour.back
        }
      ]
    });

    // Step 2: About section
    tour.addStep({
      id: 'step-2',
      title: 'Navigation Section',
      text: 'This is the Navigation section, where you can learn more pages.',
      attachTo: {
        element: '.navigations-section',
        on: 'left'
      },
      classes: 'custom-tooltip-class',
      highlightClass: 'highlighted-element',
      scrollTo: { behavior: 'smooth', block: 'center' },
      arrow: true,
      showOn: () => document.querySelector('.navigations-section') !== null,
      modalOverlayOpeningPadding: 10,
      modalOverlayOpeningRadius: 5,
      when: {
        show: () => new Promise(resolve => setTimeout(resolve, 1000))
      },
      buttons: [
        {
          text: 'Prev',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        },
        {
          text: 'Skip Tour',
          action: tour.cancel
        }
      ]
    });


    // Step 3: Contact section
    tour.addStep({
      id: 'step-3',
      text: 'Check out our Contact section for more information.',
      attachTo: {
        element: '.main-content',  // Attach to this element
        on: 'left'                // Position the tooltip to the left
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
    tour.addStep({
      id: 'step-3',
      text: 'Check out our Services section for more information.',
      attachTo: {
        element: '.services',  // Attach to this element
        on: 'left'                // Position the tooltip to the left
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    // Step 4: End of tour
    tour.addStep({
      id: 'step-4',
      text: 'That’s the end of the tour! Enjoy browsing our website!',
      buttons: [
        {
          text: 'Close',
          action: tour.complete
        }
      ]
    });

    // Start the tour
    tour.start();
  }
  
}
