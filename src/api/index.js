const RESPONSE_STATUS_MIN = 200;
const RESPONSE_STATUS_MAX = 300;

const Methods = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`
};

const checkStatus = (response) => {
  if (response.status >= RESPONSE_STATUS_MIN && response.status < RESPONSE_STATUS_MAX) {
    return response;
  } else {
    throw Error(`${response.status}: ${response.statusText}`);
  }
};

export default class API {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  getFiles() {
    return this._load({url: `get-files`})
      .then((response) => {
        return response.json();
      });
  }

  getStatusDevice() {
    return this._load({url: `get-online-device`})
      .then((response) => {
        return response.json();
      });
  }

  _load({url, method = Methods.GET, body = null, headers = new Headers()}) {
    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((error) => {
        throw error;
      });
  }
}
