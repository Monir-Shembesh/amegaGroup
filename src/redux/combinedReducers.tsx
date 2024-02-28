import {combineReducers} from '@reduxjs/toolkit';
import {NetworkApi} from './rootApis';

const combinedReducers = combineReducers({
  [NetworkApi.reducerPath]: NetworkApi.reducer,
});

export default combinedReducers;
