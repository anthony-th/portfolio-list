import React from 'react';

function ResumeButton() {
  return (
    <a href='https://drive.google.com/file/d/1blVQ4FvVogoVHk8lpdO7F7kkLqNjV2ks/view?usp=share_link' className='font-raleway hover:rounded-lg border border-[#ee1f80] px-3 py-1 rounded-sm hover:bg-[#ee1f80] transition-all duration-500' target="_blank" rel="noopener noreferrer">
        <h2 className='flex items-center justify-center w-full tracking-wide'>
          Resume
        </h2>
    </a>
  );
}

export default ResumeButton;