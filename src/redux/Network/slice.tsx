import {createSlice} from '@reduxjs/toolkit';
import Network from '../../modules/Network';

const networkState: Network.RtkState = {
  ip: '',
  imageUrl:
    'https://images.unsplash.com/photo-1682685796014-2f342188a635?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // usually this will belong to its own slice
};

export const networkSlice = createSlice({
  name: 'network',
  initialState: networkState,
  reducers: {
    setIpAddress: (state, {payload}: {payload: string}) => {
      state.ip = payload;
    },
    setImageUrlAddress: (state, {payload}: {payload: string}) => {
      state.imageUrl = payload;
    },
  },
});

export const {setIpAddress, setImageUrlAddress} = networkSlice.actions;
export default networkSlice.reducer;
