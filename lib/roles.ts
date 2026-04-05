export type Role =
  | "giaovien"
  | "totruong"
  | "bgh"
  | "admin";

export const menuByRole = {
  giaovien: [
    { name: "Dashboard", link: "/" },
    { name: "Nộp báo cáo", link: "/baocao" },
  ],

  totruong: [
    { name: "Dashboard", link: "/" },
    { name: "Duyệt tổ", link: "/duyet" },
  ],

  bgh: [
    { name: "Dashboard", link: "/" },
    { name: "Thống kê", link: "/thongke" },
  ],

  admin: [
    { name: "Dashboard", link: "/" },
    { name: "Giáo viên", link: "/giaovien" },
    { name: "Cài đặt", link: "/caidat" },
  ],
};
