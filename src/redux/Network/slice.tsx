import {createSlice} from '@reduxjs/toolkit';
import Network from '../../modules/Network';

const networkState: Network.RtkState = {
  ip: '',
};

export const networkSlice = createSlice({
  name: 'network',
  initialState: networkState,
  reducers: {
    setIpAddress: (state, {payload}: {payload: string}) => {
      state.ip = payload;
    },
  },
});

export const {setIpAddress} = networkSlice.actions;
export default networkSlice.reducer;
