import * as request from 'request';
declare type PossibleRequestOptions = (request.UriOptions & request.CoreOptions) | (request.UrlOptions & request.CoreOptions);
export declare class RequestError extends Error {
    reason: any;
    constructor(reason: any);
}
export declare const get: (options: PossibleRequestOptions) => Promise<request.Response>;
export {};
