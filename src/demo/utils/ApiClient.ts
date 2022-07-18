import retry from "fetch-retry";
import { OfflineError, RequestError } from "~/utils/errors";
import { constructQueryString } from "~/utils/util";

type Options = {
  baseUrl?: string;
};

const fetchWithRetry = retry(fetch);

class ApiClient {
  baseUrl: string;

  constructor(options: Options = {}) {
    this.baseUrl = options.baseUrl || "/api";
  }

  fetch = async (
    path: string,
    method: "GET" | "POST" | "PUT",
    data: Record<string, any> | undefined
  ) => {
    let body: string | undefined;
    let modifiedPath;
    let isJson;

    if (method === "GET") {
      if (data) {
        modifiedPath = `${path}?${data && constructQueryString(data)}`;
      } else {
        modifiedPath = path;
      }
    } else if (method === "POST" || method === "PUT") {
      if (typeof data === "string") {
        body = data;
      } else if (
        typeof data === "object" &&
        (data || "").toString() === "[object Object]"
      ) {
        isJson = true;
        body = JSON.stringify(data);
      }
    }
    const urlToFetch = this.baseUrl + (modifiedPath || path);
    const headerOptions: any = {
      Accept: "application/json",
    };
    if (isJson) {
      headerOptions["Content-Type"] = "application/json";
    }
    const headers = new Headers(headerOptions);
    let response;
    try {
      response = await fetchWithRetry(urlToFetch, {
        method,
        body,
        headers,
        redirect: "follow",
        credentials: "same-origin",
      });
    } catch (err) {
      throw new OfflineError("No internet connection available");
    }
    const success = response.status >= 200 && response.status < 300;
    if (success && response.status === 204) {
      return null;
    }
    if (success) {
      return response.json();
    }
    const error: {
      statusCode?: number;
      response?: Response;
      message?: string;
      error?: string;
      data?: Record<string, any>;
    } = {};
    throw new RequestError(error.message);
  };

  get = (path: string, data: Record<string, any> | undefined) =>
    this.fetch(path, "GET", data);

  post = (path: string, data?: Record<string, any> | undefined) =>
    this.fetch(path, "POST", data);
}

export const client = new ApiClient();
