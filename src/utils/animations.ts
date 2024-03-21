import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger);

interface AnimationTimelineProps {
  timeline: gsap.core.Timeline;
  rotationRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  rotationState: number;
  firstTarget: string;
  secondTarget: string;
  [x: string]: any;
}

// export function animateWithGsap({ target, animationProps, scrollProps }) {
//   gsap.to(target, {
//     ...animationProps,
//     scrollTrigger: {
//       trigger: target,
//       toggleActions: 'restart reverse restart reverse',
//       start: 'top 85%',
//       ...scrollProps,
//     },
//   });
// }

export function animateWithGsapTimeline({
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  ...animationProps
}: AnimationTimelineProps) {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );
}
