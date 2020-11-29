import React from 'react';

import Presenter from './Presenter';
import { JSICON, REACTICON, APPLEICON, CHROMEICON } from '../../img';

const Container = () => {
  // const abc = <REACTICON />;
  const funcAsPropsTest = () => {
    console.log('funcAsPropsTest');
  };
  return (
    <div>
      <Presenter propsTest={funcAsPropsTest}>
        <button type="button">테스트 버튼</button>
      </Presenter>
      <Presenter />
    </div>
  );
};
export default Container;
