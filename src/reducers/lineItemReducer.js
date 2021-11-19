const LineItemReducer = (state = [],action) => {

switch(action.type){

case 'DELETE_LINEITEM':
let stateCopy = [...state,action.payload];
stateCopy = state.filter( x => x.lineOrder !== action.payload);
localStorage.setItem('lineItems',JSON.stringify(stateCopy));
return stateCopy
    
case 'UPDATE_LINEITEM':

stateCopy = state.map((lineItem) => {
    const {lineOrder,uploadSku,uploadName,uploadQty, uploadPrice, uploadTotal} = action.payload;
    if(lineItem.lineOrder === lineOrder)
    {
    lineItem.uploadSku = uploadSku;
    lineItem.uploadName = uploadName;
    lineItem.uploadQty = uploadQty;
    lineItem.uploadPrice = uploadPrice;
    lineItem.uploadTotal = uploadTotal;
    }
    return lineItem;
})
localStorage.setItem('lineItems',JSON.stringify(stateCopy));
return stateCopy

default:
    return state;
}

}
export default LineItemReducer;