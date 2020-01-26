import React from "react"
import "./card.css"
import cardback from "./cardback.png"

export default class Card extends React.Component {
  getImg = () => {
    let {item} = this.props;
    return (item.show ? item.image : cardback)
  }
  render() {
    let {cardClick, idx} = this.props;
    return (
      <div className="card">
        <img onClick={cardClick} className="card-img" id={idx} src={this.getImg()} alt={idx}/>
      </div>
    )
  }
  
}

