namespace Network {
  export interface NetworkFlagInfo {
    img: string;
    emoji: string;
    emoji_unicode: string;
  }

  export interface NetworkConnectionInfo {
    asn: number;
    org: string;
    isp: string;
    domain: string;
  }

  export interface NetworkTimezoneInfo {
    id: string;
    abbr: string;
    is_dst: boolean;
    offset: number;
    utc: string;
    current_time: string;
  }

  export interface IUserNetworkInfoQueryRawResponse {
    ip: string;
    success: boolean;
    type: string;
    continent: string;
    continent_code: string;
    country: string;
    country_code: string;
    region: string;
    region_code: string;
    city: string;
    latitude: number;
    longitude: number;
    is_eu: boolean;
    postal: string;
    calling_code: string;
    capital: string;
    borders: string;
    flag: NetworkFlagInfo;
    connection: NetworkConnectionInfo;
    timezone: NetworkTimezoneInfo;
  }

  export interface IUserNetworkInfoQueryResponse {
    ip: string;
    location: string;
    timeZone: string;
    isp: string;
  }

  export const cleanNetworkInfo = (body: IUserNetworkInfoQueryRawResponse) => {
    return {
      ip: body.ip,
      location: `${body.city}, ${body.country_code}, ${body.postal}`,
      timeZone: `UTC ${body.timezone.utc}`,
      isp: body.connection.isp,
    };
  };
}

export default Network;
