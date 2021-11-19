export function deleteLineItem(Id)
{
    return {
    type:'DELETE_LINEITEM',
    payload:Id
    }
}

export function updateLineItem(lineItem)
{
    return {
        type:'UPDATE_LINEITEM',
        payload:lineItem
        }

}