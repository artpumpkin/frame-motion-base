import React from 'react';
import ReactDOM from 'react-dom';
import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { MotionBox } from './features';
import { useTransform, useViewportScroll } from 'framer-motion';
import App from './App';

// const App = () => {
//   const { scrollYProgress } = useViewportScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   return (
//     <MotionBox bgColor='green.500' w='200px' h='200px' position='fixed' top='0'>
//       <MotionBox
//         bgColor='yellow.500'
//         w='100%'
//         style={{ height: scale as any }}
//         transformOrigin='0 0'
//       ></MotionBox>
//     </MotionBox>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({
        breakpoints: {
          sm: '640px',
          // => @media (min-width: 640px) { ... }

          md: '768px',
          // => @media (min-width: 768px) { ... }

          lg: '1024px',
          // => @media (min-width: 1024px) { ... }

          xl: '1280px',
          // => @media (min-width: 1280px) { ... }

          $2xl: '1536px',
          // => @media (min-width: 1536px) { ... }
        },
      })}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
