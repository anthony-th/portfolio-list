import React from 'react';
import { motion } from 'framer-motion';
import { textFadeIn } from '../shared/types';

function Footer() {
  return (
    <div className='py-5 text-center'>
      <motion.p
        {...textFadeIn}
        className='text-sm mt-2 opacity-50 font-yesteryear'
      >
        &copy; 2022 Anthony-th. All rights reserved.
      </motion.p>
    </div>
  )
}

export default Footer;