const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = data => {
  console.log('4, increment', data);
  return { type: INCREMENT, payload: data };
};
export const decrement = () => ({ type: DECREMENT });

const initialState = { data: [1, 2, 3, 4, 5] };

const counter = (state = initialState, action) => {
  console.log('5, counter', state, action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        data: [...action.payload],
      };
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
