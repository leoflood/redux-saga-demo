import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "./App.css";
import Counter from "./components/counter";
import { DECREMENT, INCREMENT, INCREMENT_ASYNC, reducer } from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = (type) => store.dispatch({ type });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux saga demo</h1>

        <Counter
          value={store.getState()}
          onIncrement={() => action(INCREMENT)}
          onDecrement={() => action(DECREMENT)}
          onIncrementAsync={() => action(INCREMENT_ASYNC)}
        />
      </header>
    </div>
  );
}

export default App;
