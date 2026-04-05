export default function CaiDatPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold text-gray-800">
          ⚙️ Cài đặt hệ thống
        </h1>

        {/* Thông tin hệ thống */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Thông tin chung
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border rounded-lg p-3"
              placeholder="Tên đơn vị"
            />
            <input
              className="border rounded-lg p-3"
              placeholder="Năm học"
            />
            <input
              className="border rounded-lg p-3"
              placeholder="Người quản trị"
            />
            <input
              className="border rounded-lg p-3"
              placeholder="Email liên hệ"
            />
          </div>

          <button className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Lưu thay đổi
          </button>
        </div>

        {/* Giao diện */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Giao diện
          </h2>

          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg border">
              🌞 Sáng
            </button>
            <button className="px-4 py-2 rounded-lg border">
              🌙 Tối
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
