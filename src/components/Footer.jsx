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
        &copy; 2022 <a className='hover:text-[#ee1f80] transition-all' href="https://github.com/anthony-th">Anthony-th</a>. All rights reserved.
      </motion.p>
    </div>
  )
}

export default Footer;