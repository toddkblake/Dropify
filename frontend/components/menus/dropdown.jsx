import React from 'react';

const Dropdown = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return <div onClick={e => e.stopPropagation() }>{ children }</div>
};

export default Dropdown;
