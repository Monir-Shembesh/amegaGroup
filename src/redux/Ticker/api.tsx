import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import OpenSocket from '../../modules/OpenSocket';

let socket: WebSocket;
export const initSocket = (socketInstance: WebSocket) => {
  socket = socketInstance;
};

export const TickerApi = createApi({
  reducerPath: 'tickerApi',
  baseQuery: fetchBaseQuery({baseUrl: '/'}),
  tagTypes: ['tickerData'],
  endpoints: builder => ({
    getDataStream: builder.query<OpenSocket.IMessageResponse[], void>({
      queryFn: () => ({data: []}),
      onCacheEntryAdded: async (
        _arg,
        {updateCachedData, cacheDataLoaded, cacheEntryRemoved},
      ) => {
        try {
          await cacheDataLoaded;
          const handleItemInsertion = (eventMessage: WebSocketMessageEvent) => {
            const data = JSON.parse(eventMessage.data);
            if (!data) {
              return;
            }
            updateCachedData(draft => {
              draft.splice(0, 0, data);
            });
          };
          socket.addEventListener('message', handleItemInsertion);
        } catch {}
        await cacheEntryRemoved;
        socket.close();
      },
      providesTags: ['tickerData'],
    }),
  }),
});

export default TickerApi;
