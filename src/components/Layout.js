import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, mode, setMode }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: mode === "dark" ? "var(--color-dark)" : "var(--color-light)",
        color: mode === "dark" ? "var(--color-light)" : "var(--color-dark)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Navbar mode={mode} setMode={setMode} />
      <main style={{ flex: 1, paddingTop: "80px" }}>
        {children}
      </main>
      <Footer mode={mode} />
    </div>
  );
};

export default Layout;
