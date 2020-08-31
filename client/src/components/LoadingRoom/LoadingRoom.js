import React, { useState, useEffect } from 'react';
import './LoadingRoom.css';

const LoadingRoom = (props) => {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (timeLeft < 0) {
      props.history.push(`/room`);
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className='loading-room center'>
      <h1>The game will start in {timeLeft}s</h1>
    </div>
  );
};

export default LoadingRoom;
