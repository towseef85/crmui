import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Settings from './Setting';
import Common from './Common';
import Marketing from './Marketing';
import General from './General'

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    common: Common,
    marketing:Marketing,
    general: General

  });
export default reducers;
