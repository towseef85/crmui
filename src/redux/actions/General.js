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

  export const onGetSingleRecord = (controller,id,action) => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      jwtAxios
        .get(`${controller}/${id}`)
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            dispatch({type:action, payload:data.data?.data})
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

  export const onUpdateRecord =(id,controller,newValues,navigate)=>{
    return (dispatch) => {
      dispatch({type: FETCH_START});
      jwtAxios
        .put(`${controller}/${id}`, newValues)
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            navigate ? navigate(-1) : null
            dispatch({type:SHOW_MESSAGE, payload:`${controller} Updated Successfully!`})
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

  export const GetUpdateData=(id, controller)=>{
   return jwtAxios
    .get(`${controller}/${id}`)
    
  }

  export const onDeleteRecord = (id,controller) => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      jwtAxios
        .delete(`${controller}/${id}`)
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            dispatch({type:SHOW_MESSAGE, payload:`${controller} Deleted Successfully!`})
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