import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Animation, Drag, Gesture, Path, Scroll, Variants } from './features';

const MotionBox = motion.custom(Box);

const CustomItem: React.FC = ({ children }) => {
  return (
    <GridItem
      w='100%'
      h='100%'
      pb='100%'
      borderRadius='40px'
      overflow='hidden'
      position='relative'
    >
      {children}
    </GridItem>
  );
};

function App() {
  return (
    <MotionBox h='100%' w={['100%', '80%']} maxW='1000px' mx='auto'>
      <Grid
        templateColumns={['1fr', 'repeat(2, 1fr)', null, 'repeat(3, 1fr)']}
        gap={['80px', '40px', null, '20px']}
        p={['80px', '40px', null, '20px']}
      >
        <CustomItem>
          <Animation />
        </CustomItem>
        <CustomItem>
          <Variants />
        </CustomItem>
        <CustomItem>
          <Gesture />
        </CustomItem>
        <CustomItem>
          <Drag />
        </CustomItem>
        <CustomItem>
          <Scroll />
        </CustomItem>
        <CustomItem>
          <Path />
        </CustomItem>
      </Grid>
    </MotionBox>
  );
}

export default App;
