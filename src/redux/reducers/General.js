import { GET_PRICES,
  POST_PRICES,
  PUT_PRICES, 
  DELETE_PRICES,
  GET_DRIVERS,
  POST_DRIVER,
PUT_DRIVER,
DELETE_DRIVER,
GET_VENDORORDERS,
POST_VENDORORDER,
PUT_VENDORORDER,
GET_VENDORPRICES,
DELETE_VENDORORDER,
GET_ORDERSTATUS,
GET_DRIVERORDERS
} from "../../shared/constants/ActionTypes";

export const VIEW_TYPE = Object.freeze({LIST: 1, GRID: 2});

const initialState = {
    priceList:[],
    driverList:[],
    vendorOrderList:[],
    vendorPriceList:[],
    orderStatusList:[],
    driverOrderList:[]
  }

  const generalReducer=(state = initialState, action)=>{
    switch (action.type) {
      case GET_DRIVERORDERS:
        return{
          ...state,
          driverOrderList:action.payload
        }
      case GET_ORDERSTATUS:
        return {
          ...state,
          orderStatusList:action.payload
        }
       case GET_VENDORPRICES:
        return {
          ...state,
          vendorPriceList:action.payload
        }
       
        case GET_PRICES:
          return {
            ...state,
            priceList: action.payload,
          };
        case POST_PRICES:
          return {
            ...state,
            priceList: [...state.priceList, {...action.payload}],
          };
        case PUT_PRICES:{
          const getData= state.priceList.filter(x=>x.id !== action.payload.id)
          return{
            ...state,
            priceList:[...getData, {...action.payload}]}
          }
        case DELETE_PRICES:{
            const getData= state.priceList.filter(x=>x.id!== action.payload.id)
            return{
                ...state,
                priceList:[...getData]
            }
        
        }
        case GET_DRIVERS:
          return {
            ...state,
            driverList: action.payload,
          };
        case POST_DRIVER:
          return {
            ...state,
            driverList: [...state.driverList],
          };
        case PUT_DRIVER:{
          const getData= state.driverList.filter(x=>x.id !== action.payload.id)
          return{
            ...state,
            driverList:[...getData, {...action.payload}]}
          }
        case DELETE_DRIVER:{
            const getData= state.driverList.filter(x=>x.id!== action.payload.id)
            return{
                ...state,
                driverList:[...getData]
            }
          }
          case GET_VENDORORDERS:
          return {
            ...state,
            vendorOrderList: action.payload,
          };
        case POST_VENDORORDER:
          return {
            ...state
           
          };
        case PUT_VENDORORDER:{
          const getData= state.vendorOrderList.filter(x=>x.id !== action.payload.id)
          return{
            ...state,
            vendorOrderList:[...getData, {...action.payload}]}
          }
        case DELETE_VENDORORDER:{
            const getData= state.vendorOrderList.filter(x=>x.id!== action.payload.id)
            return{
                ...state,
                vendorOrderList:[...getData]
            }
          }
        default:
          return state;
      }
  }

  export default generalReducer;
