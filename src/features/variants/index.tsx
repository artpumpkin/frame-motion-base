import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { MotionBox, MotionFlex } from '..';
import { useAnimation, Variants as VariantsType } from 'framer-motion';
import RepeatButton from '../RepeateButton';

const containerVariants: VariantsType = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const Variants = () => {
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
      bg='linear-gradient(0deg, rgba(121,9,49,1) 0%, rgba(255,0,205,1) 100%)'
    >
      <MotionFlex
        position='relative'
        w='35%'
        h='35%'
        bgColor='rgba(255, 255, 255, 0.1)'
        boxShadow='0 0 10px rgba(0, 0, 0, 0.15)'
        borderRadius='20%'
        justify='center'
        align='center'
        animate={controls}
        variants={containerVariants}
      >
        <MotionBox
          position='absolute'
          w='25%'
          h='25%'
          bgColor='white'
          borderRadius='100%'
          variants={{
            hidden: {
              opacity: 0,
              y: 0,
            },
            visible: {
              opacity: 1,
              y: "-100%",
            },
          }}
        ></MotionBox>
        <MotionBox
          position='absolute'
          w='25%'
          h='25%'
          bgColor='white'
          borderRadius='100%'
          variants={{
            hidden: {
              opacity: 0,
              x: 0,
            },
            visible: {
              opacity: 1,
              x: "100%",
            },
          }}
        ></MotionBox>
        <MotionBox
          w='25%'
          h='25%'
          bgColor='white'
          borderRadius='100%'
          position='absolute'
          variants={{
            hidden: {
              opacity: 0,
              y: 0,
            },
            visible: {
              opacity: 1,
              y: "100%",
            },
          }}
        ></MotionBox>
        <MotionBox
          w='25%'
          h='25%'
          bgColor='white'
          borderRadius='100%'
          position='absolute'
          variants={{
            hidden: {
              opacity: 0,
              x: 0,
            },
            visible: {
              opacity: 1,
              x: "-100%",
            },
          }}
        ></MotionBox>
      </MotionFlex>
      <RepeatButton controls={controls} />
    </Flex>
  );
};

export default Variants;
