import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});
////json-server --watch db.json --port=8080
