import axios from "axios";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2IzYTNlNDBmYjNhNmUyZDJmNTczZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTAyOTMyNH0.yEqRRelKQktCcJ_XweJEmHv0NRVrTw6YywnOZNMOhWs"
export const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  export const userReuest = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 1000,
    headers: {token: `Bearer ${TOKEN}`}
  });