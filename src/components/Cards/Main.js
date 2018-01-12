// Main is controling the entire application area for cards
// This file is managing the data and the list element
import React, { Component } from 'react'
import CardList from './CardList'


class Main extends Component {
  constructor (){
    super()
    this.state = {
      cards: [
        {
          title: 'Card title',
          picture: 'https://dummyimage.com/600x400/222/fff',
          text: 'Lorem ipsum dolor sit amet, sit ex iudico iisque oblique, facete utamur abhorreant eos et.'
        },

        {
          title: 'Card title',
          picture: 'https://dummyimage.com/600x400/333/fff',
          text: 'Lorem ipsum dolor sit amet, sit ex iudico iisque oblique, facete utamur abhorreant eos et.'
        },

        {
          title: 'Card title',
          picture: 'https://dummyimage.com/600x400/444/fff',
          text: 'Lorem ipsum dolor sit amet, sit ex iudico iisque oblique, facete utamur abhorreant eos et.'
        },

        {
          title: 'Card title',
          picture: 'https://dummyimage.com/600x400/555/fff',
          text: 'Lorem ipsum dolor sit amet, sit ex iudico iisque oblique, facete utamur abhorreant eos et.'
        }
    ]
    }
  }

  render(){
    return (
      <CardList cards={this.state.cards} />
    )
  }
}

export default Main;
