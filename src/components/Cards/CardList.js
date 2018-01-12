// CardsList is managinbg how to display the elements list
import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
      {this.props.cards.map(msg => {
        return (
          <div className="list-card-container">
          <Card
              title={msg.title}
              picture={msg.picture}
              text={msg.text}
            />
            </div>
        )
      })}
      </div>
    )
  }
}

export default CardList;
