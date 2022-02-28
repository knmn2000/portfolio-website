import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Binary Voyager',
          'Frontend Developer',
          'Backend Engineer',
          'Computer Scientist',
          'Guitarist',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 69,
      }}
    />
  );
}

export default Type;
