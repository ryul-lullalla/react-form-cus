import React, { useMemo, useEffect, useCallback, useState } from 'react';

import axios from 'axios';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Presenter from './Presenter';

import { increment, decrement } from '../../modules/counter';
import useTest from '../../hooks/useTest/useTest';
import useRerender from '../../hooks/useRerender/useRerender';

const Container = () => {
  console.log('1, counterPage');
  // const counter = useSelector(state => state.counter.data, shallowEqual);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const onIncrease = data => {
    console.log('3, onIncrease', data);
    dispatch(increment(data));
  };

  const onIncreases = useCallback(
    data => {
      console.log('3, onIncreases + useCallback', Array.isArray(data));

      dispatch(increment(data));
    },
    [dispatch],
  );

  // const onIncrease = data => {console.log("onIncrease") return (dispatch(increment(data)))}
  const onDecrease = () => dispatch(decrement());

  const [requestPay] = useTest();
  const [eventHandler] = useRerender();

  const reduxTestFunc = () => {
    console.log('2, reduxTestFunc');
    axios('https://jsonplaceholder.typicode.com/posts/').then(res =>
      onIncreases(res.data),
    );
    // .then(() => requestPay(2));

    // requestPay(2);
  };
  const reduxTestFuncTwo = () => {
    console.log('2, reduxTestFunc');
    axios('https://jsonplaceholder.typicode.com/posts/').then(res =>
      onIncreases(res.data),
    );
    // .then(requestPay(2));
    // onIncrease();

    // requestPay(2);
  };
  console.log('before render');
  return (
    <div>
      <Presenter
        // number={counter}
        onIncrease={reduxTestFunc}
        onDecrease={reduxTestFuncTwo}
      />
    </div>
  );
};

export default Container;
