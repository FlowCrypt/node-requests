"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class RequestError extends Error {
    constructor(reason) {
        super();
        this.reason = reason;
    }
}
exports.RequestError = RequestError;
exports.get = (options) => new Promise((resolve, reject) => {
    request.get(options, (error, response, body) => {
        if (error) {
            reject(new RequestError(error));
        }
        else {
            resolve(response);
        }
    });
});
exports.post = (options) => new Promise((resolve, reject) => {
    request.post(options, (error, response, body) => {
        if (error) {
            reject(new RequestError(error));
        }
        else {
            resolve(response);
        }
    });
});
//# sourceMappingURL=index.js.map