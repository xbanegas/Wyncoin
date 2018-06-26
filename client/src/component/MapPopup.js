import React, { Component } from 'react';

export default class Map extends Component {
  render(){
    return(
      <div>
        <h3>{this.props.vendor.properties.title}</h3>
        <p>{this.props.vendor.properties.category}</p>
        <button onClick={this.props.handleDirectionClick}>Go</button>
      </div>
    )
  }
}