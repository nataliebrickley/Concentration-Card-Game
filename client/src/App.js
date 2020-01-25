import React from 'react';
import './App.css';
import API from "./util/API";
import Card from "./components/Cards/card";

class App extends React.Component {
  state = {
    data: []
  }
  handleNewGame = () => {
    API.shuffle().then(res => {
      this.setState({ data: res.data })
    })
  }
  cardClick = (card) => {
    
    console.log(card)
  }
  render() {
    let {data} = this.state
    return (
      <div className="App">
        <div className="row">
          {data.filter(item => data.indexOf(item) <= 12).map((item, idx) => {
            return (
              <Card
                key={idx}
                idx={idx}
                item={item}
                handleClick={()=>this.cardClick(item)}
              />
            )
          })}
        </div>

        <div className="row">
          {data.filter(item => data.indexOf(item) > 12 &&data.indexOf(item) <= 25).map((item, idx) => {
            return (
              <Card
                key={idx}
                idx={idx}
                item={item}
              />
            )
          })}
        </div>

        <div className="row">
          {data.filter(item => data.indexOf(item) > 25 &&data.indexOf(item) <= 38).map((item, idx) => {
            return (
              <Card
                key={idx}
                idx={idx}
                item={item}
              />
            )
          })}
        </div>

        <div className="row">
          {data.filter(item => data.indexOf(item) > 38 &&data.indexOf(item) <= 51).map((item, idx) => {
            return (
              <Card
                key={idx}
                idx={idx}
                item={item}
              />
            )
          })}
        </div>

        <button onClick={() => this.handleNewGame()}>New Game</button>
      </div>
    );
  }
}

export default App;
