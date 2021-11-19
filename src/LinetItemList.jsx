import React, { Component } from 'react';
import LinetItem from './LinetItem.jsx';

export default class LinetItemList extends Component {
    render() {
        let lineItems = this.props.lineItemList;
        const trItem = lineItems.map( (item,index) => <LinetItem key={index} lineItem={item} index={index} editLinetItemSubmit={this.props.editLinetItemSubmit} deleteLineItem={this.props.deleteLineItem}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }