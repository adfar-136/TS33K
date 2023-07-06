export const depositMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}
export const withdrawMoney = (money)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:money,
        })
    }
}