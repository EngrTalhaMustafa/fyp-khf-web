import actionTypes from '../actions/actionTypes';
const initialState = {
    cheifRequest:{},
};


const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CHIEF_REQUEST:
        console.log(state)
        let {payload} = action;
        console.log("aa",payload)
            return {
                ...state,
                cheifRequest:{
                    ...state.cheifRequest,
                    ...action.payload
                }
            }
        break;


        default: 
        return state;
    }
};

export default rootReducer;