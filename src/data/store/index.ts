import { createStore } from 'redux';
import rootReducer from '../reducer';

const store = createStore(rootReducer);
export type ReducerType = ReturnType<typeof rootReducer>;
export default store;
