import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MotionBox } from '..';
import { useViewportScroll, useTransform } from 'framer-motion';

const Variants = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]) as any;
  const height = useTransform(scale, [0, 1], ['0%', '100%']) as any;

  return (
    <Flex
      justify='center'
      align='center'
      position='absolute'
      w='100%'
      h='100%'
      bg='linear-gradient(0deg, rgba(25,9,121,1) 0%, rgba(255,0,0,1) 100%)'
    >
      <MotionBox
        w='35%'
        h='35%'
        bgColor='rgba(255, 255, 255, 0.2)'
        borderRadius='20%'
        style={{
          scale,
        }}
        overflow='hidden'
      >
        <MotionBox
          w='100%'
          bgColor='white'
          style={{
            height: height,
          }}
        ></MotionBox>
      </MotionBox>
    </Flex>
  );
};

export default Variants;
