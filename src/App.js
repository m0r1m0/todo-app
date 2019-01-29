import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="TODOを入力してください" />
        <button>追加</button>
      </div>
    );
  }
}

export default App;
