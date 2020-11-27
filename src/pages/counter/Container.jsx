import React, { useMemo, useEffect } from 'react';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Presenter from './Presenter';

import { increment, decrement } from '../../modules/counter';
import useTest from '../../hooks/useTest/useTest';

const Container = () => {
  console.log('1, counterPage');
  // const counter = useSelector(state => state.counter.data, []);

  const dispatch = useDispatch();
  const onIncrease = data => {
    console.log('3, onIncrease');
    return dispatch(increment(data));
  };

  // const onIncrease = data => {console.log("onIncrease") return (dispatch(increment(data)))}
  const onDecrease = () => dispatch(decrement());
  const [requestPay] = useTest();

  const reduxTestFunc = () => {
    console.log('2, reduxTestFunc');
    axios('https://jsonplaceholder.typicode.com/posts/')
      .then(res => onIncrease(res.data))
      .then(() => requestPay(2));
    // onIncrease();

    // requestPay(2);
  };
  const reduxTestFuncTwo = () => {
    console.log('2, reduxTestFunc');
    axios('https://jsonplaceholder.typicode.com/posts/')
      .then(res => onIncrease(res.data))
      .then(requestPay(2));
    // onIncrease();

    // requestPay(2);
  };
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
