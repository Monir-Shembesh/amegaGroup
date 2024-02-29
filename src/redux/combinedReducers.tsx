import {combineReducers} from '@reduxjs/toolkit';
import {NetworkApi, TickerApi} from './rootApis';
import network from './Network/slice';

const combinedReducers = combineReducers({
  [NetworkApi.reducerPath]: NetworkApi.reducer,
  [TickerApi.reducerPath]: TickerApi.reducer,
  network,
});

export default combinedReducers;
