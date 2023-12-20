import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const StaggeredText = ({ text, className }) => {
  const controls = useAnimation();

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        // Adjust the stagger duration as needed
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, },
  };

  const letterStyle = {
    display: 'inline-block',
    lineHeight: '1.2', // Adjust as needed
  };

  return (
    <InView
      as={motion.div}
      initial="hidden"
      animate={controls}
      exit="hidden"
      variants={parentVariants}
      onChange={(inView, entry) => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }}
    >
      <motion.div className={className}>
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={childVariants} style={letterStyle}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </InView>
  );
};

export default StaggeredText;
