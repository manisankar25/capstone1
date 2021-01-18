import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index'
export default function mainstore(initialstore){
    return createStore(rootReducer,initialstore,applyMiddleware(thunk))
}