import React from "react"
import "./card.css"
import cardback from "./cardback.png"

export default class Card extends React.Component {
  state = {
    clicked: false
  }
  handleClick = () => {
    console.log("clicked")
    this.setState({clicked: true})
  }
  getImg = () => {
    return (this.state.clicked ? this.props.item.image : cardback)
  }
  render() {
    return (
      <div className="card" onClick={()=>this.handleClick()}>
        <img className="card-img" src={this.getImg()} alt={this.props.idx}/>
      </div>
    )
  }
  
}

