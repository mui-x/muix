﻿interface Window {
  isWeb:boolean
}

declare module 'recompose/toRenderProps' {
  const toRenderProps: any
  export default toRenderProps
}

declare module 'fela-plugin-rtl' {
  const def
  export default def
}

declare module 'fbemitter' {
  export type EventSubscription = any
}

declare module 'jss-preset-default' {
  const def: any
  export default def
}

declare module 'url-parse' {
  interface Query {
    [index: string]: string;
  }

  interface QueryParser {
    (query: string): any;
  }

  interface ParsedUrl {
    (url: string, baseURL?: string, parseQuery?: boolean | QueryParser): ParsedUrl;
    new(url: string, baseURL?: string, parseQuery?: boolean | QueryParser): ParsedUrl;

    protocol: string;   // protocol: Requested protocol without slashes (e.g. http:).
    username: string;   // username: Username of basic authentication.
    password: string;   // password: Password of basic authentication.
    auth: string;       // auth: Authentication information portion (e.g. username:password).
    host: string;       // host: Host name with port number.
    hostname: string;   // hostname: Host name without port number.
    port: string;       // port: Optional port number.
    pathname: string;   // pathname: URL path.
    query: Query;       // query: Parsed object containing query string, unless parsing is set to false.
    hash: string;       // hash: The "fragment" portion of the URL including the pound-sign (#).
    href: string;       // href: The full URL.

    toString(): string;
    set(key: string, value: string | Object | number);
  }

  const URL: ParsedUrl;

  export = URL;
}

//https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
type Diff<T, U> = T extends U ? never : T
type Omit<T, K> = { [P in Diff<keyof T, K>]: T[P] }
type OmitPartial<T, K> = { [P in Diff<keyof T, K>]?: T[P] }
type Overwrite<T, U> = {[P in Diff<keyof T, keyof U>]: T[P]} & U
type PartialOverwrite<T, U> = {[P in Diff<keyof T, keyof U>]?: T[P]} & Partial<U>
type TakeFrom<T, K extends keyof T> = { [P in K]: T[P] }
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>
}
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}


//type XX = Diff<'a' | 'b', 'b' | 'd'>

//https://schneidenbach.gitbooks.io/typescript-cookbook/get-the-return-type-of-a-function.html
//nameOf, return type of function, 

//type PartialRecord<K extends string, T> = { [P in K]?: T; };

//type OmitFrom<T, K extends string> = {[P in Diff<keyof T, K>]: T[P]}

//type NoPartial<T> = { [P in keyof T]: T[P] }
