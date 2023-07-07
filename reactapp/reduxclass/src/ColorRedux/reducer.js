const initialState  = {
    backgrounCOlor :""
}
const backgroundReducer = (state=initialState,action)=>{
    switch(action.type){
        case "setbackground":
            return {
                ...state,
                backgrounCOlor : action.payload,
            }
        default:
            return state;

    }
}
export default backgroundReducer