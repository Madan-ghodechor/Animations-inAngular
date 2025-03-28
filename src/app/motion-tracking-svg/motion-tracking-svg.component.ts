import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-motion-tracking-svg',
  standalone: false,

  templateUrl: './motion-tracking-svg.component.html',
  styleUrl: './motion-tracking-svg.component.scss'
})
export class MotionTrackingSvgComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.registerPlugin(MotionPathPlugin);

    const pathEase = (path: string, config: { smooth?: boolean | number; precision?: number; axis?: 'x' | 'y' } = {}) => {
      let axis = config.axis || "y",
        precision = config.precision ?? 1, // Ensuring precision is a number
        rawPath = MotionPathPlugin.cacheRawPathMeasurements(
          MotionPathPlugin.getRawPath(document.querySelector(path) as SVGPathElement),
          Math.round(precision * 12)
        ),
        useX = axis === "x",
        start = rawPath[0][useX ? 0 : 1],
        end = rawPath[rawPath.length - 1][rawPath[rawPath.length - 1].length - (useX ? 2 : 1)],
        range = end - start,
        l = Math.round(precision * 200),
        inc = 1 / l,
        positions = [0],
        a = [0],
        minIndex = 0,
        smooth = [0],
        minChange = (1 / l) * 0.6,
        smoothRange = typeof config.smooth === "number" ? Math.round(config.smooth) : config.smooth === true ? 7 : 0,
        fullSmoothRange = smoothRange * 2,
        getClosest = (p: number) => {
          while (positions[minIndex] <= p && minIndex++ < l) { }
          a.push(a.length && ((p - positions[minIndex - 1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc));
          smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange) && smooth.push(a.length - smoothRange);
        },
        i = 1;

      for (; i < l; i++) {
        positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
      }
      positions[l] = 1;
      for (i = 0; i < l; i++) {
        getClosest(i / l);
      }
      a.push(1); // Must end at 1.
      if (smoothRange) {
        smooth.push(l - fullSmoothRange + 1);
        smooth.forEach(i => {
          let start = a[i],
            j = Math.min(i + fullSmoothRange, l),
            inc = (a[j] - start) / (j - i),
            c = 1;
          i++;
          for (; i < j; i++) {
            a[i] = start + inc * c++;
          }
        });
      }
      l = a.length - 1;
      return (p: number) => {
        let i = p * l,
          s = a[Math.floor(i)];
        return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
      };
    };

    // Animate the circle along the path
    gsap.to("#circle", {
      duration: 5,
      ease: pathEase("#motionPath", { smooth: 10, precision: 1, axis: "x" }),
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      repeat: -1,
      yoyo: true
    });
  }
}
