import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Header = ({ leftContent, rightContent }) => {


  return (
    <motion.div
      className='relative flex justify-between items-center 
      gap-7 py-3'
      initial={{
        opacity: 0,
        y: -40
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }}
    >
        {leftContent}
        {rightContent}
    </motion.div>
  )
}

export default Header;