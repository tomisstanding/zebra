import React from 'react';
import Filter from '../Filter';

function Header() {
  return (
    <div className="header">
      <p>You just compared <span style={{fontWeight: "bold"}}> 145 rates</span> in 2 minutes!</p>
      <Filter />
    </div>
  )
}

export default Header;
