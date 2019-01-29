import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="TODOを入力してください"
          value={this.props.inputTodo} // connectした時に渡したprops(mapStateToProps)
          onChange={e => this.props.changeInput(e.target.value)} // connectした時に渡したprops, dispatchする関数。e.target.valueで入力欄の値が取れる
        />
        <button>追加</button>
      </div>
    );
  }
}

export default App;
