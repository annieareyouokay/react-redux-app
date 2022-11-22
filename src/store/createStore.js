export function createStore(reducer, initialState) {
  let state = initialState;
  const observers = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    observers.forEach(l => {
      l();
    });
  }

  function subscribe(listener) {
    observers.push(listener);
  }
  return { getState, dispatch, subscribe };
}

