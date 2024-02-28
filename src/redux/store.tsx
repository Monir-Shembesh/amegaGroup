import {
  configureStore,
  Action,
  ThunkAction,
  ThunkMiddleware,
} from '@reduxjs/toolkit';
import combinedReducers from './combinedReducers';
import {NetworkApi} from './rootApis';

//ts-type for combined reducer
export type StoreState = ReturnType<typeof combinedReducers>;

//rtk query/redux middlewares
const middlewares: ThunkMiddleware[] = [NetworkApi.middleware];

// create redux store
const store = configureStore({
  reducer: combinedReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, StoreState, unknown, Action>;
export default store;
