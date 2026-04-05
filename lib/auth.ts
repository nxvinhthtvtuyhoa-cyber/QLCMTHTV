import { Role } from "./roles";

/* TẠM GIẢ LẬP USER */
export function getCurrentUser() {
  return {
    name: "Nguyễn Xuân Vinh",
    role: "admin" as Role,
  };
}
