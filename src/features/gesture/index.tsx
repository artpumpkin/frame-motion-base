import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MotionBox } from '..';

const Variants = () => {
  return (
    <Flex
      justify='center'
      align='center'
      position='absolute'
      w='100%'
      h='100%'
      bg='linear-gradient(0deg, rgba(9,79,121,1) 0%, rgba(0,255,218,1) 100%)'
    >
      <MotionBox
        w='35%'
        h='35%'
        bgColor='white'
        borderRadius='20%'
        // initial={{
        //   scale: 0,
        //   opacity: 0,
        //   rotate: -180,
        // }}
        whileHover={{
          scale: 1.2,
          rotate: 90,
        }}
        whileTap={{
          scale: 0.8,
          rotate: 0,
          borderRadius: '100%',
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          mass: 1.5
        }}
      ></MotionBox>
    </Flex>
  );
};

export default Variants;
