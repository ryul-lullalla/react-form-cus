import { useCallback, useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const useRerender = () => {
  console.log('custom hook useRerender');
  //   const number = useSelector(({ counter }) => counter, []);

  const [value, setValue] = useState();
  const setValFunc = () => {
    return 'useRerender Hook';
  };
  return [setValFunc];
};

export default useRerender;
