import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, SHOW_MESSAGE } from "shared/constants/ActionTypes";
import jwtAxios from '@crema/services/auth/jwt-auth/jwt-api';

export const onPost=(values,controller,action,formName)=>{
    return (dispatch) => {
      dispatch({type: FETCH_START});
      jwtAxios
        .post(controller,values)
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            dispatch({type: action, payload: values});
            dispatch({type:SHOW_MESSAGE, payload:`${controller} Added Successfully!`})
            formName.resetFields();
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

  export const onGetList = (controller,action) => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      jwtAxios
        .get(controller)
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            dispatch({type: action, payload: data.data?.data});
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