import React from 'react';
import portfolio from '../data/portfolio';
import { cardsContainer } from '../shared/types';
import PortfolioItem from './PortfolioItem';
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={cardsContainer}
        initial="hidden"
        animate="visible"
      >
          {portfolio.map(project => (
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
    </div>
  );
}

export default Portfolio;