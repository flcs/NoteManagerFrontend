import { INote } from "../interfaces/note";
import api from "./api";

interface I_id {
  _id: string | undefined;
}

const token = localStorage.getItem("@RNAuth:token");
const config = { headers: { Authorization: `Bearer ${token}` } };

export const createNote = async (data: INote) =>
  api.post("/note", data, config);

export const getNotes = async (data: { board: string }) =>
  api.post("/notes", data, config);

export const editNote = async (data: INote) => api.put("/note", data, config);

export const deleteNote = async (data: I_id) =>
  api.delete("/note", {
    data: { data },
    headers: { Authorization: `Bearer ${token}` },
  });
