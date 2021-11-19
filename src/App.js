import React, { Component } from 'react';
import './App.css';
import LinetItemList from './LinetItemList.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteLineItem, updateLineItem } from './actions/lineItemActions'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.deleteLineItem = this.deleteLineItem.bind(this);
    this.editLinetItemSubmit = this.editLinetItemSubmit.bind(this);
  }
  componentWillMount(){

  }

  deleteLineItem(lineOrder)
  {
    let r = window.confirm("Do you want to delete this item");
    if( r === true)
    {
    this.props.deleteLineItem(lineOrder);
   
  }
  }
  editLinetItemSubmit(lineOrder,uploadSku,uploadName,uploadQty, uploadPrice, uploadTotal)
  {
this.props.updateLineItem({lineOrder:lineOrder,uploadSku:uploadSku,uploadName:uploadName,uploadQty:uploadQty, uploadPrice:uploadPrice, uploadTotal:uploadTotal});
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="row mt-3"><div className="col-lg-12">
      <div className="card">
        <div className="card-header">
          Product Directory
        </div>
        <div className="card-body">
          <table className="table table-hover">
                  <thead className="thead-dark"><tr><th>SKU</th><th>NAME</th><th>QUANTITY</th><th>PRICE</th><th>TAX</th><th>TOTAL</th><th>ACTION</th><th>Delete</th></tr></thead>
                  <LinetItemList deleteLineItem={this.deleteLineItem} lineItemList={this.props.lineItemList} editLinetItemSubmit={this.editLinetItemSubmit}/>
          </table>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lineItemList : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteLineItem:deleteLineItem,
    updateLineItem:updateLineItem
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
