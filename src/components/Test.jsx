import React from 'react';

const Test = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '24px',
      color: 'red',
      zIndex: 9999
    }}>
      React is working! If you see this, the issue is with other components.
    </div>
  );
};

export default Test;
