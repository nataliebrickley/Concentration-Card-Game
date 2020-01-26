import React from 'react';
import './App.css';
import API from "./util/API";
import Card from "./components/Cards/card";
import correct from "./components/Cards/happy-face.jpg"

class App extends React.Component {
  state = {
    data: [],
    first: "",
    second: "",
    pairsLeft: 26,
    playing: false
  }

  handleNewGame = () => {
    API.shuffle().then(res => {
      this.setState({ data: res.data })
    })
    this.setState({ playing: true })
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
    if (first.value === second.value) {
      data.forEach((item, idx) => {
        if (item === first || item === second) {
          document.getElementById(`${idx}`).style.display = "none";
        }
      })
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
    let { data, playing } = this.state
    return (
      <div className="App">
        {!playing
          ? <div className="home">
            <div className="homeText">
              <p className="title">Concentration Card Game</p>
              <p className="rules">Make as many pairs as you can!</p>
              <div className="game-btn">
                <button onClick={() => this.handleNewGame()}>New Game</button>
              </div>
            </div>

          </div>
          : <div className="game">
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
                    idx={idx + 13}
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
                    idx={idx + 26}
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
                    idx={idx + 39}
                    item={item}
                  />
                )
              })}
            </div>
            <div className="game-btn">
              <button onClick={() => this.handleNewGame()}>New Game</button>
            </div>
          </div>}


      </div>
    );
  }
}

export default App;
