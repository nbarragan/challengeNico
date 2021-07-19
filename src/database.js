import { LowSync, JSONFileSync } from "lowdb";

let db;

export function createCnn() {
  db = new LowSync(new JSONFileSync("file.json"));
  db.read();
  db.data = { users: [], movies: [] };
  db.write();
}
export const getConnection = () => db;
