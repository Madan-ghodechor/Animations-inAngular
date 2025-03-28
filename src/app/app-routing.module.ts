import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAnnimationsComponent } from './web-annimations/web-annimations.component';
import { ScrollAnimeComponent } from './scroll-anime/scroll-anime.component';
import { WebTourComponent } from './web-tour/web-tour.component';
import { HeadingAnimationComponent } from './heading-animation/heading-animation.component';
import { SnapScrollComponent } from './snap-scroll/snap-scroll.component';
import { MotionTrackingSvgComponent } from './motion-tracking-svg/motion-tracking-svg.component';

const routes: Routes = [
  {
    path:'webAnime',
    component: WebAnnimationsComponent
  },
  {
    path:'scrollAnime',
    component: ScrollAnimeComponent
  },
  {
    path:'Take-Tour',
    component: WebTourComponent
  },
  {
    path: 'heading',
    component: HeadingAnimationComponent
  },
  {
    path: 'snap-scroll',
    component: SnapScrollComponent
  },
  {
    path: 'motion-tracking',
    component: MotionTrackingSvgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
