import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { MotionBox } from '..';

const Variants = () => {
  return (
    <Flex
      justify='center'
      align='center'
      position='absolute'
      w='100%'
      h='100%'
      bg='linear-gradient(0deg, rgba(121,44,9,1) 0%, rgba(255,209,0,1) 100%)'
    >
      <Flex
        justify='center'
        align='center'
        w='35%'
        h='35%'
        bgColor='rgba(255, 255, 255, 0.1)'
        borderRadius='20%'
        overflow='hidden'
      >
        <MotionBox
          w='60%'
          h='60%'
          bgColor='white'
          borderRadius='20%'
          drag
          dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}
          dragElastic={0.2}
          userSelect='none'
          cursor='pointer'
          // initial={{
          //   scale: 0,
          //   opacity: 0,
          //   rotate: -180,
          // }}
          // animate={{
          //   scale: 1,
          //   opacity: 1,
          //   rotate: 0,
          //   transition: {
          //     type: 'spring',
          //   },
          // }}
        ></MotionBox>
      </Flex>
    </Flex>
  );
};

export default Variants;
