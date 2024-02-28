import {combineReducers} from '@reduxjs/toolkit';
import {NetworkApi} from './rootApis';
import network from './Network/slice';

const combinedReducers = combineReducers({
  [NetworkApi.reducerPath]: NetworkApi.reducer,
  network,
});

export default combinedReducers;
