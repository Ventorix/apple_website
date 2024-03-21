import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { yellowImg } from '../utils';

import { View } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { models, sizes } from '../constants';
import { animateWithGsapTimeline } from '../utils/animations';
import ModelView from './ModelView';

export interface ModelProps {
  title: string;
  color: string[];
  img: string;
}

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState<ModelProps>({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === 'large') {
      animateWithGsapTimeline({
        timeline: tl,
        rotationRef: small,
        rotationState: smallRotation,
        firstTarget: '#view1',
        secondTarget: '#view2',
        transform: 'translateX(-100%)',
        duration: 2,
      });
    }

    if (size === 'small') {
      animateWithGsapTimeline({
        timeline: tl,
        rotationRef: large,
        rotationState: largeRotation,
        firstTarget: '#view2',
        secondTarget: '#view1',
        transform: 'translateX(0)',
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to('#heading', {
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <h1 id='heading' className='section-heading'>
          Take a closer look
        </h1>

        <div className='mt-5 flex flex-col items-center'>
          <div className='relative h-[75vh] w-full overflow-hidden md:h-[90vh]'>
            <ModelView
              index={1}
              groupRef={small}
              gsapType='view1'
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType='view2'
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className='fixed bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden'
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className='mx-auto w-full'>
            <p className='mb-5 text-center text-sm font-light'>{model.title}</p>

            <div className='flex-center'>
              <ul className='color-container'>
                {models.map((model, i) => (
                  <li
                    key={i}
                    className='mx-2 h-6 w-6 cursor-pointer rounded-full'
                    style={{ backgroundColor: model.color[0] }}
                    onClick={() => setModel(model)}
                  ></li>
                ))}
              </ul>

              <button className='size-btn-container'>
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className='size-btn'
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
