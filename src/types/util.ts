export type ResponseMeta = {
    current_page: number;
    last_page: number;
    path: string;
    per_page: number;
    total: number;
  };

export type ApiResponseType<T> = {
    status_code: number;
    data: T;
    status: string;
    meta: ResponseMeta;
  };


  export interface TokenType {
    header: Header
    payload: Payload
  }
  
  export interface Header {
    alg: string
    typ: string
  }
  
  export interface Payload {
    userId: string
    iat: number
  }