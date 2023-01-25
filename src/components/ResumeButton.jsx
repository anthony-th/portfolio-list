import React from 'react';
import PdfImg from '/images/pdf.png';

function ResumeButton() {
  return (
    <a href='#' className='gap-1 flex items-center justify-center hover:text-[#ee1f80] transition-colors text-4xl font-yesteryear px-2 py-1'>
        <h2 className='flex items-center justify-center w-full tracking-wide'>
          <span className='text-[#ee1f80]'>R</span>esume
        </h2>
        <img
          className='w-[27px] h-[27px]'
          src={PdfImg}
          alt='resume'
          title='resume'
        />
    </a>
  );
}

export default ResumeButton;