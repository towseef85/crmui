import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, GET_VENDORORDERSINGLE, GET_VENDORPRICES, GET_VENDORS, POST_VENDORS, SHOW_MESSAGE } from "shared/constants/ActionTypes";

import jwtAxios from '@crema/services/auth/jwt-auth/jwt-api';

export const onGetVendors = () => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      jwtAxios
        .get('vendor')
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            dispatch({type: GET_VENDORS, payload: data.data?.data});
          } else {
            dispatch({
              type: FETCH_ERROR,
              payload: 'Something went wrong, Please try again!',
            });
          }
        })
        .catch((error) => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    };
  };

  export const onGetSingleRecordAsync=(id)=>{
   return  jwtAxios.get(`Order/${id}`)
   
  }
  export const onGetSingleVendorOrder=(id)=>{
    return (dispatch) => {
      dispatch({type: FETCH_START});
      jwtAxios
        .get(`Order/${id}`)
        .then((data) => {
          if (data.status === 200) {
              
            dispatch({type: GET_VENDORORDERSINGLE, payload: data.data?.data});
            jwtAxios.get(`Vendor/GetVendorPrices/${data.data.data.vendorId}`)
            .then((data)=>{
              if(data.status===200){
                dispatch({type: FETCH_SUCCESS});
                dispatch({type:GET_VENDORPRICES, payload:data.data?.data})
              }
            })
          } else {
            dispatch({
              type: FETCH_ERROR,
              payload: 'Something went wrong, Please try again!',
            });
          }
        })
        .catch((error) => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    };
  }

  export const onPostVendor=(newValues)=>{
    return (dispatch) => {
      dispatch({type: FETCH_START});
      jwtAxios
        .post('Project',newValues)
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            dispatch({type: POST_VENDORS, payload: newValues});
            dispatch({type:SHOW_MESSAGE, payload:"Project Added Successfully"})
          } else {
            dispatch({
              type: FETCH_ERROR,
              payload: 'Something went wrong, Please try again!',
            });
          }
        })
        .catch((error) => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    };
  }
  