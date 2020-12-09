import { AnimationControls } from 'framer-motion';
import React from 'react';
import { MotionBox } from '..';

const RepeatButton = ({ controls }: { controls: AnimationControls }) => {
  return (
    <MotionBox
      pos='absolute'
      bottom='20px'
      right='20px'
      w='40px'
      h='40px'
      bgColor='white'
      borderRadius='100%'
      cursor='pointer'
      userSelect='none'
      initial={{
        opacity: 0,
        x: 10,
        y: 10,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          delay: 1,
        },
      }}
      whileHover={{
        borderRadius: '40%',
        transition: {
          type: 'spring',
          stiffness: 300,
        },
      }}
      whileTap={{
        scale: 0.8,
      }}
      onClick={() => {
        controls.set('hidden');
        controls.start('visible');
      }}
    ></MotionBox>
  );
};

export default RepeatButton;
