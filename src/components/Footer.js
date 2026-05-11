import Link from "next/link";
import { GithubIcon, LinkedInIcon, TwitterIcon, EmailIcon } from "./Icons";

const Footer = ({ mode }) => {
  return (
    <footer
      style={{
        borderTop: mode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
        padding: "2rem 3rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        marginTop: "4rem",
        backgroundColor: mode === "dark" ? "rgba(27,27,27,0.6)" : "rgba(245,245,245,0.6)",
      }}
    >
      <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
        &copy; {new Date().getFullYear()} Krishnamoorthi R. All Rights Reserved.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="https://github.com/krizz18bugger" target="_blank" rel="noopener noreferrer"
          style={{ width: "1.4rem", color: "currentColor" }}>
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/r-krishnamoorthi-b557bb307/" target="_blank" rel="noopener noreferrer"
          style={{ width: "1.4rem" }}>
          <LinkedInIcon />
        </a>
        <a href="mailto:moorthi18krishna@gmail.com"
          style={{ width: "1.4rem", color: "currentColor" }}>
          <EmailIcon />
        </a>
      </div>

      <span style={{ fontSize: "0.85rem", opacity: 0.7 }}>
        Built with{" "}
        <span style={{ color: "var(--color-primary)" }}>♥</span>
        {" "}using Next.js
      </span>
    </footer>
  );
};

export default Footer;
