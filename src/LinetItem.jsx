import React, { Component } from 'react';


export default class LinetItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editLineItem = this.editLineItem.bind(this);
    this.editLinetItemSubmit = this.editLinetItemSubmit.bind(this);
    this.deleteLineItem = this.deleteLineItem.bind(this);
  }
  deleteLineItem()
  {
    const {lineOrder} = this.props.lineItem;
this.props.deleteLineItem(lineOrder);
  }
  editLineItem()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editLinetItemSubmit()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.editLinetItemSubmit(this.props.lineItem.lineOrder,this.uploadSku.value,this.uploadName.value,this.uploadQty.value, this.uploadPrice.value, this.uploadTotal.value);
  }
    render() {
        const { priceOrd, uploadName, uploadSku, uploadQty, uploadTotal, nameOrd, uploadPrice, quantityOrd} = this.props.lineItem;
      return (
        this.state.isEdit === true ? 

        <tr key={this.props.index}>
          <td>
            <input ref={uploadSku => this.uploadSku = uploadSku} className="Tableinput" defaultValue ={uploadSku}/>
          </td>
          <td><input defaultValue={uploadName} ref={uploadName => this.uploadName = uploadName} className="Tableinput" /> <br />
          {nameOrd}
          </td>
          <td><input ref={uploadQty => this.uploadQty = uploadQty} defaultValue={uploadQty} className="Tableinput" /><br />
          {quantityOrd}
          </td>
          <td>
            <input ref={uploadPrice => this.uploadPrice = uploadPrice} defaultValue ={uploadPrice} className="Tableinput" />
          </td>
          <td>
          {Number.parseFloat(uploadPrice * 0.1).toFixed(2)}
          </td>
          <td>
          <input ref={uploadTotal => this.uploadTotal = uploadTotal} defaultValue ={uploadPrice*uploadQty} className="TableinputDisabled" disabled />
          <span className="d-none">{uploadTotal}</span>
          </td>
          <td><i className="far fa-save" onClick={this.editLinetItemSubmit}></i></td>
          <td><i className="fas fa-trash"></i></td>  
        </tr>
 :
        <tr key={this.props.index}>
          <td>{uploadSku}</td>
          <td><p>{uploadName}</p></td>
          <td><p>{uploadQty}</p></td>
          <td><p>{uploadPrice}</p></td>
          <td><p>{Number.parseFloat(priceOrd * 0.1).toFixed(2)}</p></td>
          <td><p>{uploadTotal}</p></td>
          <td><i className="far fa-edit" onClick={this.editLineItem}></i></td>
          <td><i className="fas fa-trash" onClick={this.deleteLineItem}></i></td>
        </tr>
      );
    }
  }