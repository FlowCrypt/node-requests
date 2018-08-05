import * as request from 'request';

type PossibleRequestOptions = (request.UriOptions & request.CoreOptions) | (request.UrlOptions & request.CoreOptions);

export class RequestError extends Error {
  public reason: any;
  constructor(reason: any) {
    super();
    this.reason = reason;
  }
}

export const get = (options: PossibleRequestOptions): Promise<request.Response> => new Promise((resolve, reject) => {
  request.get(options, (error, response, body) => {
    if(error) {
      reject(new RequestError(error));
    } else {
      resolve(response);
    }
  });
});
