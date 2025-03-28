import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-animation',
  standalone: false,

  templateUrl: './heading-animation.component.html',
  styleUrl: './heading-animation.component.scss'
})
export class HeadingAnimationComponent implements OnInit {

  words: string[] = ['Angular', 'Node.js', 'UI/UX', 'Backend'];
  colors: string[] = ['#EF2EA6', '#529F41', '#FFF809', '#0067B2']; // Dynamic colors
  displayText: string = '';
  wordIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  textColor: string = this.colors[0]; // Default color

  ngOnInit(): void {
    this.animateText();
  }

  animateText() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.displayText = currentWord.substring(0, this.charIndex--);
    } else {
      this.displayText = currentWord.substring(0, this.charIndex++);
    }

    let speed = this.isDeleting ? 100 : 150;

    if (!this.isDeleting && this.charIndex === currentWord.length + 1) {
      speed = 1000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.textColor = this.colors[this.wordIndex % this.colors.length]; // Change color dynamically
    }

    setTimeout(() => this.animateText(), speed);
  }
}
