import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const Presenter = (props, ref) => {
  const handleBlur = () => {
    console.log('blur');
  };
  return (
    <div>
      <div>label</div>
      <input
        onBlur={handleBlur}
        placeholder="test"
        type="email"
        nanme="email"
      />
    </div>
  );
};

export default forwardRef(Presenter);
