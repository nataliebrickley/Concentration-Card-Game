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
  showCard = (item) => {
    item.show = true;
  }
  keepTrack = (item) => {
    let { first, second } = this.state;
    if (first === "") {
      this.setState({ first: item })
    }
    else if (first !== "" && second === "") {
      this.setState({ second: item }, function () {
        this.resolveMatch()
        console.log("match? " + this.resolveMatch())
      })

    }
  }
  cardClick = (item) => {
    if (!item.show) {
      this.showCard(item)
      this.keepTrack(item)
    }
  }
  resolveMatch = () => {
    let { first, second, data } = this.state;
    console.log(`first: ${first.value} second: ${second.value}`)
    if (first.value === second.value) {
      this.setState({ first: "", second: "" })
      return true
    }
    else {
      setTimeout(() => {
        data.forEach(item => {
          if (item === first || item === second) {
            item.show = false;
          }
        })
        this.setState({ first: "", second: "" })
        return false
      }, 500)
    }
  }
  render() {
    let { data } = this.state
    return (
      <div className="App">
        <div className="row">
          {data.filter(item => data.indexOf(item) <= 12).map((item, idx) => {
            return (
              <Card
                key={idx}
                cardClick={() => this.cardClick(item)}
                idx={idx}
                item={item}
              />
            )
          })}
        </div>

        <div className="row">
          {data.filter(item => data.indexOf(item) > 12 && data.indexOf(item) <= 25).map((item, idx) => {
            return (
              <Card
                key={idx}
                cardClick={() => this.cardClick(item)}
                idx={idx}
                item={item}
              />
            )
          })}
        </div>

        <div className="row">
          {data.filter(item => data.indexOf(item) > 25 && data.indexOf(item) <= 38).map((item, idx) => {
            return (
              <Card
                key={idx}
                cardClick={() => this.cardClick(item)}
                idx={idx}
                item={item}
              />
            )
          })}
        </div>

        <div className="row">
          {data.filter(item => data.indexOf(item) > 38 && data.indexOf(item) <= 51).map((item, idx) => {
            return (
              <Card
                key={idx}
                cardClick={() => this.cardClick(item)}
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
