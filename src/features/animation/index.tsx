import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { MotionBox } from '..';
import { useAnimation } from 'framer-motion';
import RepeatButton from '../RepeateButton';

const Animation = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set('hidden');
    controls.start('visible');
  }, [controls]);

  return (
    <Flex
      justify='center'
      align='center'
      position='absolute'
      w='100%'
      h='100%'
      bg='linear-gradient(0deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
    >
      <MotionBox
        w='35%'
        h='35%'
        bgColor='white'
        borderRadius='20%'
        animate={controls}
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
            rotate: -180,
          },
          visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
              type: 'spring',
              delay: 0.3,
            },
          },
        }}
      ></MotionBox>
      <RepeatButton controls={controls} />
    </Flex>
  );
};

export default Animation;
