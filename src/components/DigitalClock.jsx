import React, { useEffect, useState } from "react";

function DigitalClock () {

  const [time, setTime] = useState(new Date());

  useEffect( () => {
    const intervalid = setInterval( () => {
       setTime(new Date())
    },1000)

    // return () => {
    //   clearInterval(intervalid)
    // }
  },[]);

  return(
   <div className="digital-clock">
    <h1>Digital Clock</h1>

    <div className="clock">
      <div className="time">
          <span>{time.getHours().toString().padStart(2, '0')}:</span>
          <span>{time.getMinutes().toString().padStart(2, '0')}:</span>
          <span>{time.getSeconds().toString().padStart(2, '0')}</span>

      </div>
      <div className="date">
            {time.toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
      </div>
    </div>
   </div>
  )
};

export default DigitalClock;