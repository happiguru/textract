import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './App';
import {createStore} from 'redux';
import LineItemReducer from './reducers/lineItemReducer';
import {Provider} from 'react-redux'

let initialState = [
    {
      'Match/No-Match/Missing': 'match',
      discountExt: '0',
      discountMatches: false,
      discountOrd: '0',
      lineOrder: 1,
      nameExt: 'INSTITUTE CAP',
      nameMatches: false,
      nameOrd: 'INSTITUTE CAP DBL',
      priceExt: '15.89',
      priceMatches: true,
      priceOrd: '15.89',
      quantityExt: '32',
      quantityMatches: false,
      quantityOrd: '30',
      supplierSKUExt: 'HW2140-DBL',
      supplierSKUMatches: true,
      supplierSKUOrd: 'HW2140-DBL',
      totalExt: '508.48',
      totalMatches: false,
      totalOrd: '476.70',
      uploadDisc: '0',
      uploadName: 'INSTITUTE CAP',
      uploadPrice: '15.89',
      uploadQty: '32',
      uploadSku: 'HW2140-DBL',
      uploadTotal: '508.48',
      approved: false,
    },
    {
        'Match/No-Match/Missing': 'match',
        discountExt: '0',
        discountMatches: false,
        discountOrd: '0',
        lineOrder: 2,
        nameExt: 'INSTITUTE CAP',
        nameMatches: false,
        nameOrd: 'INSTITUTE CAP GNT',
        priceExt: '15.89',
        priceMatches: true,
        priceOrd: '15.89',
        quantityExt: '32',
        quantityMatches: false,
        quantityOrd: '30',
        supplierSKUExt: 'HW2140-GNT',
        supplierSKUMatches: true,
        supplierSKUOrd: 'HW2140-GNT',
        totalExt: '508.48',
        totalMatches: false,
        totalOrd: '476.70',
        uploadDisc: '0',
        uploadName: 'INSTITUTE CAP',
        uploadPrice: '15.89',
        uploadQty: '32',
        uploadSku: 'HW2140-GNT',
        uploadTotal: '508.48',
        approved: false,
      }
]

// const fetchData = () => {
//     return axios.get('data_for_state.json')
//     .then((response) => console.log(response.data.textract.matched));
// }


localStorage.clear();
if( localStorage.getItem("lineItems") === null)
localStorage.setItem('lineItems',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('lineItems'));

const store = createStore(LineItemReducer,initialState, // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));
