import { CSSProperties } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        <li>
          <button
            onClick={() => handleNavigate("/")}
            style={location.pathname === "/" ? activeLinkStyle : linkStyle}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigate("/potential")} // ✅ Fixed navigation
            style={location.pathname === "/potential" ? activeLinkStyle : linkStyle}
          >
            Potential Candidates
          </button>
        </li>
      </ul>
    </nav>
  );
};

const navStyle: CSSProperties = {
  position: "fixed",
  top: 10,
  left: 20,
  display: "flex",
  alignItems: "center",
  padding: "10px",
  zIndex: 1000,
  backgroundColor: "transparent",
};

const navListStyle: CSSProperties = {
  listStyle: "none",
  display: "flex",
  gap: "15px",
  padding: 0,
  margin: 0,
};

const linkStyle: CSSProperties = {
  color: "white",
  background: "none",
  border: "none",
  fontSize: "18px",
  padding: "8px 12px",
  cursor: "pointer",
  transition: "color 0.3s",
};

const activeLinkStyle: CSSProperties = {
  ...linkStyle,
  fontWeight: "bold",
  textDecoration: "underline",
};

export default Nav;
