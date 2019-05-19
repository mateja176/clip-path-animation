import React, { useRef, useState } from 'react';
import './App.css';

const small = 'circle(10% at 50% 50%)';
const medium = 'circle(50% at 50% 50%)';

const normal = 'normal';
const reverse = 'reverse';

const App: React.FC = () => {
  const [direction, setDirection] = useState<typeof normal | typeof reverse>(
    normal,
  );

  const toggleDirection = () =>
    setDirection(direction => (direction === normal ? reverse : normal));

  const divRef = useRef<HTMLDivElement>();

  return (
    <div>
      <div ref={divRef} style={{ clipPath: small }} className="shape" />
      <button
        onClick={() => {
          toggleDirection();

          (divRef.current || document.createElement('div')).animate(
            [
              {
                clipPath: small,
              },
              {
                clipPath: medium,
              },
            ],
            {
              direction,
              duration: 1000,
              fill: 'forwards',
            },
          );
        }}
      >
        Animate
      </button>
    </div>
  );
};

export default App;
