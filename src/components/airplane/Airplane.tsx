'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Model from '../../../public/Scene';
import { StyledAirplaneCanvas, StyledMotionDiv } from './StyleAirplane';

export default function Airplane() {
  const { scrollY } = useScroll();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;

  const x = useTransform(scrollY, [0, 2000], [0, screenWidth - 50], { clamp: false });
  const y = useTransform(scrollY, [0, 2000], [0, screenHeight - 50], { clamp: false });

  const updateSnakeX = (value: number) => {
    const amplitude = (screenWidth - 300) / 2;
    return Math.sin(value / 100) * amplitude + amplitude;
  };

  const updateSnakeY = (value: number) => Math.max(0, Math.min(screenHeight - 100, value));

  const [snakeX, setSnakeX] = useState(updateSnakeX(-100));
  const [snakeY, setSnakeY] = useState(updateSnakeY(0));

  useMotionValueEvent(x, 'change', value => setSnakeX(updateSnakeX(value -100)));
  useMotionValueEvent(y, 'change', value => setSnakeY(updateSnakeY(value)));

  if (!isClient) return null; 

  return (
    <StyledMotionDiv 
      style={{ position: 'fixed', x: snakeX, y: snakeY }}
      transition={{ type: 'spring', stiffness: 10, damping: 30 }}>
        <StyledAirplaneCanvas camera={{ position: [0, 10, 10], fov: 50, near: 0.1, far: 1000 }}
        gl={{ antialias: true }}
        shadows
        frameloop="demand"
        linear
        dpr={[1, 2]}>
          {typeof window !== 'undefined' && (
            <>
              <ambientLight intensity={3}/>
              <directionalLight
                position={[5, 5, 5]}
                intensity={3}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                />
              <OrbitControls minDistance={13} maxDistance={17}/>
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </>
          )}
        </StyledAirplaneCanvas>
    </StyledMotionDiv>
  );
}
