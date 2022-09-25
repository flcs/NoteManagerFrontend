import { INote } from "../interfaces/note";
import api from "./api";

interface I_id {
  _id: string | undefined;
}

const getConfig = () => {
  const token = localStorage.getItem("@RNAuth:token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
};

export const createNote = async (data: INote) =>
  api.post("/note", data, getConfig());

export const getNotes = async (data: { board: string }) =>
  api.post("/notes", data, getConfig());

export const editNote = async (data: INote) =>
  api.put("/note", data, getConfig());

export const deleteNote = async (data: I_id) => {
  const token = localStorage.getItem("@RNAuth:token");

  return api.delete("/note", {
    data: { data },
    headers: { Authorization: `Bearer ${token}` },
  });
};
