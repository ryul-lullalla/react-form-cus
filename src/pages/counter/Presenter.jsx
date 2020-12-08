import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Presenter = ({ onIncrease, onDecrease }, ref) => {
  const [value, setValue] = useState(0);
  useImperativeHandle(ref, () => ({
    value,
  }));
  const handleIncrease = () => {
    onIncrease();
    setValue(value + 1);
  };
  return (
    <div style={{ display: 'flex' }}>
      <button type="button" style={{ width: 50 }} onClick={onDecrease}>
        -
      </button>
      {/* <div>{number.map(el => el.id)}</div> */}
      <button type="button" style={{ width: 50 }} onClick={handleIncrease}>
        +
      </button>
      <div>{value}</div>
    </div>
  );
};

export default forwardRef(Presenter);
