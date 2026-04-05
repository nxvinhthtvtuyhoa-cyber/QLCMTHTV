"use client";

import { useState } from "react";
import { getCurrentUser } from "@/lib/auth";
import { menuByRole } from "@/lib/roles";
export default function Dashboard() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* ===== SIDEBAR (Mobile First) ===== */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
        ${openMenu ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >
        <div className="p-5 font-bold text-xl border-b">
          📊 QLCM THTV
        </div>

        <nav className="p-4 space-y-2">
          <MenuItem name="Dashboard" />
          <MenuItem name="Báo cáo" />
          <MenuItem name="Giáo viên" />
          <MenuItem name="Minh chứng" />
          <MenuItem name="Cài đặt" link="/caidat" />
        </nav>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="flex-1">

        {/* TOPBAR */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">

          <button
            className="md:hidden text-xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            ☰
          </button>

          <h1 className="font-semibold text-lg">
            Dashboard tổng quan
          </h1>

          <div className="text-sm bg-gray-100 px-3 py-1 rounded-lg">
            Admin
          </div>
        </header>

        {/* BODY */}
        <div className="p-4 space-y-6">

          {/* CARD STATS */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <StatCard title="Giáo viên" value="42" icon="👩‍🏫" />
            <StatCard title="Báo cáo" value="128" icon="📄" />
            <StatCard title="Đã duyệt" value="96" icon="✅" />
            <StatCard title="Chờ duyệt" value="32" icon="⏳" />

          </section>

          {/* QUICK ACTION */}
          <section className="bg-white rounded-2xl shadow p-5">
            <h2 className="font-semibold mb-4">
              Thao tác nhanh
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ActionBtn text="Tạo báo cáo" />
              <ActionBtn text="Duyệt minh chứng" />
              <ActionBtn text="Xuất thống kê" />
              <ActionBtn text="Quản lý GV" />
            </div>
          </section>

          {/* ACTIVITY */}
          <section className="bg-white rounded-2xl shadow p-5">
            <h2 className="font-semibold mb-4">
              Hoạt động gần đây
            </h2>

            <ul className="space-y-3 text-sm">
              <li>✅ Nguyễn Văn A đã nộp báo cáo</li>
              <li>📄 Lớp 3A cập nhật minh chứng</li>
              <li>👩‍🏫 Tổ 1 hoàn thành KPI tháng</li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function MenuItem({ name, link = "#" }: any) {
  return (
    <a
      href={link}
      className="block p-3 rounded-xl hover:bg-gray-100 transition"
    >
      {name}
    </a>
  );
}

function StatCard({ title, value, icon }: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function ActionBtn({ text }: any) {
  return (
    <button className="bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700 transition">
      {text}
    </button>
  );
}
