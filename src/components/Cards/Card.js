// Card is the way how we display each card element
import React, { Component } from 'react'
import './css/style.css'


class Card extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section>
      <figure><img src={this.props.picture} /></figure>
      <h2>{this.props.title}</h2>
      <div className='text'><p>{this.props.text}</p></div>
      </section>
    )
  }


}

export default Card;
