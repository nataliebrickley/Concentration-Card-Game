import React from "react"
import "./card.css"
import cardback from "./cardback.png"

export default class Card extends React.Component {
  getImg = () => {
    return (this.props.item.show ? this.props.item.image : cardback)
  }
  render() {
    return (
      <div className="card">
        <img onClick={this.props.cardClick} className="card-img" src={this.getImg()} alt={this.props.idx}/>
      </div>
    )
  }
  
}

