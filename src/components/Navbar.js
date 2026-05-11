import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TwitterIcon, SunIcon, MoonIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${isActive ? "w-full" : "w-0"}
        `}
        style={{
          backgroundColor: "var(--color-primary)",
          position: "absolute",
          bottom: "-2px",
          left: 0,
          height: "2px",
          display: "inline-block",
          transition: "width 0.3s ease",
          width: isActive ? "100%" : "0",
        }}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = ({ mode, setMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleMobileLink = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 3rem",
        backgroundColor: mode === "dark" ? "rgba(27,27,27,0.9)" : "rgba(245,245,245,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: mode === "dark" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
        transition: "background 0.3s ease",
      }}
    >
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
        }}
        className="hamburger-btn"
        aria-label="Toggle menu"
      >
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "currentColor" }} />
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "currentColor" }} />
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "currentColor" }} />
      </button>

      {/* Desktop Nav */}
      <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <NavLink href="/" label="Home" current={router.pathname} />
        <NavLink href="/about" label="About" current={router.pathname} />
        <NavLink href="/projects" label="Projects" current={router.pathname} />
        {/*<NavLink href="/articles" label="Articles" current={router.pathname} /> */}
      </nav>

      {/* Logo */}
      <Link
        href="/"
        style={{
          fontSize: "1.4rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
          color: mode === "dark" ? "#f5f5f5" : "#1b1b1b",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <span style={{ color: "var(--color-primary)" }}>Krishnamoorthi</span>
      </Link>

      {/* Right Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <a href="https://github.com/krizz18bugger" target="_blank" rel="noopener noreferrer"
          style={{ width: "1.5rem", color: mode === "dark" ? "#f5f5f5" : "#1b1b1b" }}>
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/r-krishnamoorthi-b557bb307/" target="_blank" rel="noopener noreferrer"
          style={{ width: "1.5rem" }}>
          <LinkedInIcon />
        </a>
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          style={{
            background: mode === "dark" ? "#f5f5f5" : "#1b1b1b",
            border: "none",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: "4px",
            color: mode === "dark" ? "#1b1b1b" : "#f5f5f5",
          }}
          aria-label="Toggle dark mode"
        >
          {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: mode === "dark" ? "rgba(27,27,27,0.97)" : "rgba(245,245,245,0.97)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          <button onClick={() => setIsOpen(false)}
            style={{ position: "absolute", top: "1.5rem", right: "2rem", fontSize: "2rem", background: "none", border: "none", cursor: "pointer", color: "currentColor" }}>
            ✕
          </button>
          {["Home", "About", "Projects", "Articles"].map((item) => (
            <button key={item} onClick={() => handleMobileLink(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
              style={{ fontSize: "1.5rem", fontWeight: 700, background: "none", border: "none", cursor: "pointer", color: "currentColor" }}>
              {item}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

const NavLink = ({ href, label, current }) => (
  <Link
    href={href}
    style={{
      fontWeight: 500,
      fontSize: "0.95rem",
      textDecoration: "none",
      color: "currentColor",
      borderBottom: current === href ? "2px solid var(--color-primary)" : "2px solid transparent",
      paddingBottom: "2px",
      transition: "border-color 0.2s",
    }}
  >
    {label}
  </Link>
);

export default Navbar;
