export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        <div style={{ display: "flex", height: "100vh" }}>

          {/* MENU */}
          <div style={{
            width: "220px",
            background: "#1e293b",
            color: "white",
            padding: "20px"
          }}>
            <h2>QLCMTHTV</h2>

            <a href="/" style={menu}>Dashboard</a>
            <a href="/giaovien" style={menu}>Giáo viên</a>
            <a href="/baocao" style={menu}>Báo cáo</a>
            <a href="/caidat" style={menu}>Cài đặt</a>
          </div>

          {/* NỘI DUNG */}
          <div style={{ flex: 1, padding: 30 }}>
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}

const menu = {
  display: "block",
  color: "white",
  marginTop: 15,
  textDecoration: "none"
};
