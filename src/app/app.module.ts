import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebAnnimationsComponent } from './web-annimations/web-annimations.component';
import { ScrollAnimeComponent } from './scroll-anime/scroll-anime.component';
import { WebTourComponent } from './web-tour/web-tour.component';
import { HeadingAnimationComponent } from './heading-animation/heading-animation.component';
import { SnapScrollComponent } from './snap-scroll/snap-scroll.component';
import { MotionTrackingSvgComponent } from './motion-tracking-svg/motion-tracking-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    WebAnnimationsComponent,
    ScrollAnimeComponent,
    WebTourComponent,
    HeadingAnimationComponent,
    SnapScrollComponent,
    MotionTrackingSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
