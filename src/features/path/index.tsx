import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { MotionBox } from '..';
import { motion, useAnimation } from 'framer-motion';
import RepeatButton from '../RepeateButton';

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
      bg='linear-gradient(0deg, rgba(9,121,18,1) 0%, rgba(201,255,0,1) 100%)'
    >
      <Flex
        justify='center'
        align='center'
        w='35%'
        h='35%'
        bgColor='rgba(255, 255, 255, 0.3)'
        borderRadius='20%'
      >
        <motion.svg
          width='60%'
          height='60%'
          viewBox='0 0 24 24'
          fill='transparent'
          stroke='white'
          strokeWidth={0.5}
          strokeLinejoin='round'
          strokeLinecap='round'
          overflow='visible'
          animate={controls}
          variants={{
            hidden: {
              fill: 'rgba(255, 255, 255, 0)',
            },
            visible: {
              fill: 'rgba(255, 255, 255, 1)',
              transition: {
                type: 'tween',
                delay: 0.5,
                duration: 1.5,
              },
            },
          }}
        >
          <motion.path
            d={`M 12, 12
            m -3, 0
            a 3,3 0 1,0 6,0
            a 3,3 0 1,0 -6,0`}
            variants={{
              hidden: {
                pathLength: 0,
              },
              visible: {
                pathLength: 1,
                transition: {
                  type: 'tween',
                  duration: 2,
                },
              },
            }}
          />
          <motion.path
            d='M12,4A13,13,0,0,0,0,12a13,13,0,0,0,24,0A13,13,0,0,0,12,4Zm0,12.88a5,5,0,1,1,5-5A5,5,0,0,1,12,16.88Z'
            variants={{
              hidden: {
                pathLength: 0,
              },
              visible: {
                pathLength: 1,
                transition: {
                  type: 'tween',
                  duration: 3,
                },
              },
            }}
          />
        </motion.svg>
      </Flex>
      <RepeatButton controls={controls} />
    </Flex>
  );
};

export default Variants;
