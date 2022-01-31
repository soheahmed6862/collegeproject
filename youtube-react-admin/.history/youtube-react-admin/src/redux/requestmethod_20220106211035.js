import axios from "axios";

const URL="http://localhost:5000/api/"
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDFjMDM4YzZkNzdkYzdjODZkZDAwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTMwNjgyOH0.pe-3w5OpnrhaJ7ivAU5j-gzSe0vYyLTpxcuzf0VYdgY"
export const publick = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  console.log(JSON.parse(JSON.parse(localStorage.getItem("applicationState")).user.currentuser))
  
export const userRequest= axios.create({
    baseURL: URL,
    timeout: 1500,
    headers: {token: `Bearer ${TOKEN}`}
  });
