import React from 'react';

const Tooltip = ({ text }) => {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg whitespace-no-wrap z-10">
      {text}
    </div>
  );
};

export default Tooltip;
