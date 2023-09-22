import { GET_VENDORS, POST_VENDORS, PUT_VENDORS, DELETE_VENDORS,GET_VENDORORDERSINGLE } from "../../shared/constants/ActionTypes";

export const VIEW_TYPE = Object.freeze({LIST: 1, GRID: 2});

const initialState = {
    vendorList:[],
    singleorder:null
  }

  const marketingReducer=(state = initialState, action)=>{
    switch (action.type) {
        case GET_VENDORS:
          return {
            ...state,
            vendorList: action.payload,
          };
        
        case POST_VENDORS:
          return {
            ...state,
            vendorList: [...state.vendorList, {...action.payload}],
          };
        case PUT_VENDORS:{
          const getData= state.vendorList.filter(x=>x.id !== action.payload.id)
          return{
            ...state,
            vendorList:[...getData, {...action.payload}]}
          }
        case DELETE_VENDORS:{
            const getData= state.vendorList.filter(x=>x.id!== action.payload.id)
            return{
                ...state,
                vendorList:[...getData]
            }
          }
        case GET_VENDORORDERSINGLE:
            return{...state, singleorder:action.payload}
        
        default:
          return state;
      }
  }




  export default marketingReducer;