import { connect, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/counter";
import { decrement, increment, incrementAsync } from "./redux/reducer";

function App(props) {
  const count = useSelector((state) => state.count);
  const { dispatch } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux saga demo</h1>

        <Counter
          value={count}
          onIncrement={() => dispatch(increment())}
          onDecrement={() => dispatch(decrement())}
          onIncrementAsync={() => dispatch(incrementAsync())}
        />
      </header>
    </div>
  );
}

export default connect()(App);
