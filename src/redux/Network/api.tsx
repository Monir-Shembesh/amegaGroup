import {createApi} from '@reduxjs/toolkit/query/react';
import Axios from '../../modules/Axios';
import Network from '../../modules/Network';

export const NetworkApi = createApi({
  reducerPath: 'networkApi',
  baseQuery: Axios.axiosBaseQuery({baseUrl: 'https://ipwho.is'}),
  tagTypes: ['userNetInfo'],
  endpoints: builder => ({
    getUserNetInfo: builder.query<
      Network.IUserNetworkInfoQueryResponse,
      string
    >({
      query: ip => ({
        url: `/${ip}`,
        method: 'GET',
      }),
      transformResponse: (
        res: Network.IUserNetworkInfoQueryRawResponse,
        _meta,
      ) => {
        return Network.cleanNetworkInfo(res);
      },
      providesTags: ['userNetInfo'],
    }),
  }),
});

export default NetworkApi;
