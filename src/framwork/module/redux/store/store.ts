import { createStore } from 'redux';
import RootReducer from '../reducer';

const store = createStore(RootReducer);

export type StoreType = ReturnType<typeof RootReducer>;
export default store;
