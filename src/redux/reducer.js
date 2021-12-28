// Actions
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_ASYNC = "INCREMENT_ASYNC";

// Reducer
export default function reducer(state = { count: 0 }, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

// Action Creators
export function increment() {
  return { type: INCREMENT };
}
export function decrement() {
  return { type: DECREMENT };
}
export function incrementAsync() {
  return { type: INCREMENT_ASYNC };
}
