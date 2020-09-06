import React from 'react';
import './Header.css'
import Filter from '../Filter';

// Stack overflow answer https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes} minute ${(seconds < 10 ? '0' : '')} and ${seconds} seconds!`;
}

function Header({insuranceData}) {
  return (
    <section className="header">
      <p>You just compared <span style={{fontWeight: "bold"}}> {insuranceData.carriers_searched} rates </span> in {millisToMinutesAndSeconds(insuranceData.search_time)}</p>
      <Filter />
    </section>
  )
}

export default Header;
