import { onGetList, onGetSingleRecord } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ORDERREQUEST, GET_SINGLEORDERREQUEST } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';
import OrderRequestList from './OrderRequestList'
import OrderRequestDetails from './OrderRequestDetails'
import { useEffect } from 'react'

export default function OrderRequest() {
  const dispatch = useDispatch()
  const {singleOrderRequest,orderRequestList} = useSelector(({general})=> general)
  const {loading} = useSelector(({common}) => common);
  const {id} = useParams();
  useEffect(() => {
      if (id) {
        //dispatch(onGetSingleRecord('Order',id,setSingleOrder))
        dispatch(onGetSingleRecord('OrderRequest',id, GET_SINGLEORDERREQUEST));
      }
      dispatch(onGetList('OrderRequest',GET_ORDERREQUEST))
    }, [id]);
    console.log("singleOrderRequest",singleOrderRequest);
    const onGetMainComponent =()=>{
      if(id){    
          return <OrderRequestDetails id={id} loading={loading} singleOrderRequest={singleOrderRequest}/>
        } else{
          return <OrderRequestList loading={loading} orderRequestList={orderRequestList} 
          />
        }
    }
return (
  <>
    <AppPageMetadata title="Order Request"/>
    <AppsContainer title="Order Request" type='bottom' fullView>

    {onGetMainComponent()}
    </AppsContainer>
  </>
)
}

