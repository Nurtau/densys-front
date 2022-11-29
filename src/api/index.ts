import { Api, HttpClient } from "./Api";

const httpClient = new HttpClient({
  baseUrl: "http://localhost:8000",
});

export const api = new Api(httpClient).users;

export * from "./Api";
