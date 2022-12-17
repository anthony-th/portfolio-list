import React from 'react';

function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="text-sm mt-2 opacity-50 font-yesteryear">
        &copy; {new Date().getFullYear()} Anthony-th. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;