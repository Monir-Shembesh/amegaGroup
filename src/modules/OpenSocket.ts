namespace SocketSpace {
  export const socketUrl = 'wss://stream.binance.com:443/ws/bnbusdt';
  export const connectionMessage = (method: 'SUBSCRIBE' | 'UNSUBSCRIBE') => ({
    method,
    params: ['btcusdt@aggTrade'],
    id: 1,
  });

  export interface IMessageResponse {
    e: string;
    E: number;
    s: string;
    a: number;
    p: string;
    q: string;
    f: number;
    l: number;
    T: number;
    m: boolean;
    M: boolean;
  }
}

export default SocketSpace;
