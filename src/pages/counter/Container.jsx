import React, {
  useMemo,
  useEffect,
  useCallback,
  useState,
  useRef,
} from 'react';

import axios from 'axios';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Presenter from './Presenter';

import { increment, decrement } from '../../modules/counter';
import useTest from '../../hooks/useTest/useTest';
import useRerender from '../../hooks/useRerender/useRerender';

const Container = () => {
  console.log('1, counterPage');
  const counter = useSelector(state => state.counter.data);
  console.log('1-1, counter', counter);

  const [value, setValue] = useState(1);
  const parentRef = useRef();

  console.log({ value });
  const dispatch = useDispatch();
  const onIncrease = data => {
    console.log('3, onIncrease', data);
    dispatch(increment(data));
  };
  const handleIncrease = () => {
    setValue(value + 1);
  };
  const onIncreases = useCallback(
    data => {
      console.log('3, onIncreases + useCallback', Array.isArray(data));
      console.log('parentRef===', parentRef.current.value);

      dispatch(increment(data));
      console.log('3-1, onIncreases + useCallback', counter);
      return data;
    },
    [dispatch],
  );
  useEffect(() => {
    console.log('parentRef===', parentRef.current.value);
  }, [parentRef.current?.value]);

  // const onIncrease = data => {console.log("onIncrease") return (dispatch(increment(data)))}
  const onDecrease = () => dispatch(decrement());

  const [requestPay, number] = useTest(counter);
  const requestPayTest = requestPay();
  // const [eventHandler] = useRerender();
  console.log('requestPay', requestPay, requestPayTest, { number });
  const StateExFUnc = () => {
    console.log('StateExFUnc', { value });
    setValue(value + 1);
    console.log('StateExFUnc 2', { value });
  };
  const reduxTestFunc = useCallback(() => {
    console.log('2, reduxTestFunc');
    // const counter = useSelector(state => state.counter.data);

    axios('https://jsonplaceholder.typicode.com/posts/')
      .then(res => onIncreases(res.data))
      .then(res => {
        console.log(res);
        console.log({ counter, number, requestPayTest, res });
        requestPay(2, counter, res);
      });
  }, [counter]);
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
        ref={parentRef}
        // number={counter}
        onIncrease={reduxTestFunc}
        onDecrease={reduxTestFuncTwo}
      />
      <Presenter
        ref={parentRef}
        // number={counter}
        onIncrease={reduxTestFunc}
        onDecrease={reduxTestFuncTwo}
      />
    </div>
  );
};

export default Container;
