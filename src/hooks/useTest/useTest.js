import { useCallback, useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const useTest = () => {
  console.log('custom hook');
  const number = useSelector(({ counter }) => counter);
  console.log({ number });
  useEffect(() => {
    console.log('임시번호');
  }, [number]);
  const requestPay = useCallback(
    cartType => {
      // const numberTwo = useSelector(state => state.counter, []);
      // console.log({ numberTwo });

      if (cartType === 2) {
        console.log('6===', number);
        // 여기는 buyItems 사용, 구매하기로 바로 결제 진행
      }
    },
    [number],
  );
  console.log('before return customHook');
  return [requestPay];
};

export default useTest;
