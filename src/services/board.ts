import api from "./api";

interface Iadmin {
  admin: string | undefined;
}
interface Iviwer {
  viwer: string | undefined;
}

const token = localStorage.getItem("@RNAuth:token");
const config = { headers: { Authorization: `Bearer ${token}` } };

console.log(token);
export const getAdminBoards = async (data: Iadmin) =>
  api.post("/adminboards", data, config);

export const getViwerBoards = async (data: Iviwer) =>
  api.post("/viwerBoards", data, config);
