import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.increaseCount.bind(this)}>increaseCount</button>
        </div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
