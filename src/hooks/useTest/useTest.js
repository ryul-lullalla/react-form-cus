import { useCallback, useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const useTest = counterProp => {
  console.log('custom hook', counterProp);
  let num = 0;
  num++;
  const number = useSelector(({ counter }) => counter, []);
  console.log({ number });
  console.log({ num });

  // useEffect(() => {
  //   console.log('임시번호');
  // }, [number]);
  const requestPay = (cartType, counter, res) => {
    console.log({ num });
    console.log({ number, res });

    console.log('last', cartType, counterProp, counter, number);
    // const numberTwo = useSelector(state => state.counter, []);
    // console.log({ numberTwo });
    // console.log('inside requestPay function===', number);
    if (cartType === 2) {
      console.log('6===', counter, counterProp);
      // 여기는 buyItems 사용, 구매하기로 바로 결제 진행
    }
    return number;
  };
  const previewFunc = requestPay();
  console.log({ previewFunc });
  console.log('before return customHook');
  return [requestPay, number];
};

export default useTest;
