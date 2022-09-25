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

interface I_id_viwer {
  _id: string | undefined;
  viwer: string | undefined;
}

const getConfig = () => {
  const token = localStorage.getItem("@RNAuth:token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
};

export const getAdminBoards = async (data: Iadmin) =>
  api.post("/adminboards", data, getConfig());

export const getViwerBoards = async (data: Iviwer) =>
  api.post("/viwerBoards", data, getConfig());

export const createBoard = async (data: Iadmin) =>
  api.post("/board", data, getConfig());

export const deleteBoard = async (data: I_id) => {
  const token = localStorage.getItem("@RNAuth:token");
  return api.delete("/board", {
    data: { data },
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addViwer = async (data: I_id_viwer) =>
  api.put("/board/addviwer", data, getConfig());

export const delViwer = async (data: I_id_viwer) => {
  const token = localStorage.getItem("@RNAuth:token");
  return api.delete("board/delviwer", {
    data: { data },
    headers: { Authorization: `Bearer ${token}` },
  });
};
