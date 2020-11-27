import React from 'react';

const Presenter = ({ onIncrease, onDecrease }) => {
  return (
    <div style={{ display: 'flex' }}>
      <button type="button" style={{ width: 50 }} onClick={onDecrease}>
        -
      </button>
      {/* <div>{number.map(el => el.id)}</div> */}
      <button type="button" style={{ width: 50 }} onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default Presenter;
