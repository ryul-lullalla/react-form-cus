const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = data => {
  console.log('4, increment');
  return { type: INCREMENT, payload: data };
};
export const decrement = () => ({ type: DECREMENT });

const initialState = { data: [] };

const counter = (state = initialState, action) => {
  console.log('5, counter');
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
