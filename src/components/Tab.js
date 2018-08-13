import React from 'react';

const Tab = props => {
  const { tabtext, icon, activetab, cardindex, onClick, id, className } = props,
        isActive = activetab === cardindex ? ' active' : '';

  return (
    <div className={`tab${isActive}`} onClick={onClick} id={`tabs-${className}`}>
      {tabtext}
    </div>
  );
};

export default Tab;
