import querystring from "querystring";

const API_URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api";

class RestAPIClient {
  protected api_url = API_URL;

  protected path: string;

  constructor(path: string) {
    this.path = path;
    this.querystring = querystring;
  }

  protected querystring: typeof querystring;

  private async request(
    contextPath: string,
    method: string,
    payload?: any,
    host?: string
  ) {
    let url = `${API_URL}/${this.path}${contextPath}`;
    if (host) {
      url = `${host}/${this.path}${contextPath}`;
    }

    if (method === "GET" && payload) {
      url = `${url}?${querystring.stringify(payload || {})}`;
    }

    const options: RequestInit = {
      method,
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      options["body"] = JSON.stringify(payload);
    }
    const res = await fetch(url, options);

    try {
      switch (true) {
        case res.status > 201:
          const json = await res?.json();
          if (!!json) {
            const error = {
              ...json,
              status: res.status,
            };
            throw error;
          } else {
            const error = {
              message: res.statusText,
              status: res.status,
            };
            throw error;
          }

        case res.status === 200 || res.status === 201: {
          const json = await res.json();
          return json;
        }
      }
    } catch (e) {
      throw e;
    }
  }

  protected get = (contextPath = "", params?: object) =>
    this.request(contextPath, "GET", params);

  protected post = (contextPath = "", body: object = {}) =>
    this.request(contextPath, "POST", body);

  protected put = (contextPath = "", body: object = {}) =>
    this.request(contextPath, "PUT", body);

  protected patch = (contextPath = "", body: object = {}) =>
    this.request(contextPath, "PATCH", body);

  protected delete = (contextPath = "") => this.request(contextPath, "DELETE");
}

export default RestAPIClient;
