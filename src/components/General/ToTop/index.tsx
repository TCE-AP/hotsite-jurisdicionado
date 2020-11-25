import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import * as Scroll from 'react-scroll';

const ToTop: React.FC = () => {
  const scroll = Scroll.animateScroll;

  return (
    <button
      type="button"
      onClick={() => scroll.scrollToTop()}
      className="fixed focus:outline-none right-0 bottom-0 mr-2 sm:mr-4 mb-20 p-4 rounded-full transition duration-200 text-blue-primary hover:text-blue-apoio bg-white dark:text-yellow-primary dark:hover:bg-blue-apoio dark:bg-gray-700 shadow-lg"
    >
      <FiArrowUp className="animate-bounce stroke-current" size={18} />
    </button>
  );
};

export default ToTop;
