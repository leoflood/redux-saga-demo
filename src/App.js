import { connect, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/counter";
import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from "./redux/reducer";

function App(props) {
  const value = useSelector((state) => state);
  const { dispatch } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux saga demo</h1>

        <Counter
          value={value}
          onIncrement={() => dispatch({ type: INCREMENT })}
          onDecrement={() => dispatch({ type: DECREMENT })}
          onIncrementAsync={() => dispatch({ type: INCREMENT_ASYNC })}
        />
      </header>
    </div>
  );
}

export default connect()(App);
