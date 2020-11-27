import React, { useEffect } from 'react';

// import { JSICON, REACTICON, APPLEICON, CHROMEICON } from '../../img';

import { REACTICON, JSICON, CHROMEICON, APPLEICON } from '../../img';

const Presenter = props => {
  // const abc = () => {
  //   React.Children.map(children, (child, index) => {
  //     console.log(child, index);
  //   });
  // };
  // useEffect(() => {}, []);
  return (
    <div>
      <input />
      {props.children}
    </div>
  );
};

export default Presenter;
