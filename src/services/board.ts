import api from "./api";

interface Iadmin {
  admin: string | undefined;
}
interface Iviwer {
  viwer: string | undefined;
}
interface I_id {
  _id: string | undefined;
}

const token = localStorage.getItem("@RNAuth:token");
const config = { headers: { Authorization: `Bearer ${token}` } };

export const getAdminBoards = async (data: Iadmin) =>
  api.post("/adminboards", data, config);

export const getViwerBoards = async (data: Iviwer) =>
  api.post("/viwerBoards", data, config);

export const createBoard = async (data: Iadmin) =>
  api.post("/board", data, config);

export const deleteBoard = async (data: I_id) =>
  api.delete("/board", {
    data: { data },
    headers: { Authorization: `Bearer ${token}` },
  });
