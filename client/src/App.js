import React from 'react';
import './App.css';
import API from "./util/API"

class App extends React.Component {
  state = {
    data: "unclicked"
  }
  handleClick = () => {
    console.log("clicked")
    API.shuffle().then(res => {
      this.setState({data: res.data})
      console.log(this.state.data)

    })
  }
  render() {
  return (
    <div className="App">
      {/* <p>{this.state.data}</p> */}
      <button onClick={() => this.handleClick()}>New Game</button>
    </div>
  );
}
}

export default App;
