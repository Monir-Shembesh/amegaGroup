import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, StoreState} from '../redux/store';

namespace Redux {
  // Use throughout your app instead of plain `useDispatch` and `useSelector`
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
}

export default Redux;
