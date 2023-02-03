import React, { useState, useEffect } from 'react';
import portfolio from '../data/portfolio';
import { cardsContainer, cardsItem } from '../shared/types';
import PortfolioItem from './PortfolioItem';
import { motion, AnimatePresence } from 'framer-motion';

function Portfolio() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('activePage')) || 1);

  const totalPages = Math.ceil(portfolio.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = portfolio.slice(startIndex, endIndex);

  useEffect(() => {
    localStorage.setItem('activePage', currentPage);
  }, [currentPage, currentItems]);

  return (
    <div className='w-fit flex flex-col gap-4 items-center justify-center'>
      <AnimatePresence>
        <motion.div
          key={currentPage}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
          variants={cardsContainer}
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0 }}
        >
            {currentItems.map(project => (
                <PortfolioItem
                    key={project.title}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    projectUrl={project.projectUrl}
                    deployUrl={project.deployUrl}
                />
            ))}
        </motion.div>
        <motion.div
          className="flex justify-center items-center font-yesteryear text-xl"
          variants={cardsContainer}
          initial='hidden'
          animate='visible'
        >
          <motion.button className={`border-[#ee1f80] border border-r-0 px-4 py-1 rounded-l ${currentPage === 1 ? 'text-gray-700 border-gray-700' : 'text-gray-300 hover:text-[#ee1f80] transition-colors'}`} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} variants={cardsItem}>Previous</motion.button>
          {Array.from({length: totalPages}, (_, i) => i + 1).map((pageNum, index) => (
            <motion.button 
              variants={cardsItem}
              key={pageNum} 
              className={`px-2 py-1 ${currentPage === pageNum ? 'text-[#ee1f80] border-[#ee1f80] cursor-default' : 'text-gray-300 hover:text-[#ee1f80] hover:border-[#ee1f80] transition-colors'} 
              ${index === 0 ? 'pl-4' : ''} ${index === totalPages - 1 ? 'pr-4' : ''}`} 
              onClick={() => setCurrentPage(pageNum)}>
              {pageNum}
            </motion.button>
          ))}
          <motion.button className={`border-[#ee1f80] border border-l-0 px-4 py-1 rounded-r ${currentPage === totalPages ? 'text-gray-700 border-gray-700' : 'text-gray-300 hover:text-[#ee1f80] transition-colors'}`} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} variants={cardsItem}>Next</motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;