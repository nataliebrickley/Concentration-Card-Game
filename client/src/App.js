import React from 'react';
import './App.css';
import API from "./util/API";
import Card from "./components/Cards/card";

class App extends React.Component {
  state = {
    data: [],
    first: "",
    second: ""
  }

  handleNewGame = () => {
    API.shuffle().then(res => {
      this.setState({ data: res.data })
    })
  }
  
  cardClick = (item) => {
    let {first, second} = this.state;
    if(first === "") {
      this.setState({first: item.value})
    }
    else if (first !== "" && second==="") {
      this.setState({second: item.value}, function() {
        this.resolveMatch()
      console.log("match? " + this.resolveMatch())
      })
      
    }
    
  }
  resolveMatch = () => {
    let {first, second} = this.state;
    console.log(`first: ${first} second: ${second}`)
    if(first===second){
      this.setState({first: "", second: ""})
      return true
    }
    else {
      this.setState({first: "", second: ""})
      return false
  }
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
                cardClick={()=>this.cardClick(item)}
                idx={idx}
                showImg={false}
                item={item}
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
