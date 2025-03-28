import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-scroll-anime',
  standalone: false,

  templateUrl: './scroll-anime.component.html',
  styleUrl: './scroll-anime.component.scss'
})
export class ScrollAnimeComponent implements OnInit {
  ngOnInit(): void {
    this.initAOS();
  }

  initAOS() {
    // Initialize AOS with custom settings
    AOS.init({
      offset: 200,  // How far from the top the element should be before it starts animating
      delay: 100,   // Delay before animation starts
      duration: 600, // Duration of the animation
      easing: 'ease-out', // Easing function
      once: false, // Trigger once (set to true for one-time animation)
      mirror: false, // Animate again when scrolling back up
    });
  }
  cards:any = [
    {
      "img": "https://c4.wallpaperflare.com/wallpaper/1008/290/563/cheetah-family-cheetah-with-3-cubs-wallpaper-preview.jpg"
    },
    {
      "img": "https://bigcatsindia.com/wp-content/uploads/2019/08/black-panther-in-india.jpg"
    },
    {
      "img": "https://cdn.britannica.com/37/198637-050-2DC77A31/panther-member-Florida-population-hardwood-forests-cougar.jpg"
    },
    {
      "img": "https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_caracal.jpg"
    },
    {
      "img": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/Serval-Cat-Large-Ears-Natural0-Behaviors_697044514.jpg"
    },
    {
      "img": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/Serving-The-Servals-Learn-About-Wild-Cat-Species-Africa_1961360032.jpg"
    },
    {
      "img": "https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_caracal.jpg"
    },
    {
      "img": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/Serval-Cat-Large-Ears-Natural0-Behaviors_697044514.jpg"
    },
    {
      "img": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/Serving-The-Servals-Learn-About-Wild-Cat-Species-Africa_1961360032.jpg"
    },
    {
      "img": "https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_caracal.jpg"
    },
    {
      "img": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/Serval-Cat-Large-Ears-Natural0-Behaviors_697044514.jpg"
    },
    {
      "img": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/Serving-The-Servals-Learn-About-Wild-Cat-Species-Africa_1961360032.jpg"
    },
    {
      "img": "https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_caracal.jpg"
    },
    {
      "img": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/Serval-Cat-Large-Ears-Natural0-Behaviors_697044514.jpg"
    },
    {
      "img": "https://www.lionstigersandbears.org/wp-content/uploads/2024/01/Serving-The-Servals-Learn-About-Wild-Cat-Species-Africa_1961360032.jpg"
    }
  ];
}
