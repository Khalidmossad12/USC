import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";
const Logo = () => (
  <img src={logoImg} alt="Al Muttahida Systems" className="logo-img" />
);

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/services", label: "خدماتنا" },
  { to: "/projects", label: "مشاريعنا" },
  { to: "/clients", label: "عملاؤنا" },
  { to: "/suppliers", label: "الموردون" },
  { to: "/about", label: "من نحن" },
];

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg fixed-top main-navbar">
      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="logo-circle">
            <Logo />
          </div>
          <div>
            <div className="brand-name">
              {" "}
              المتحدة للأنظمة والاتصالات والاعمال الكهروميكانيكية
            </div>
            <div className="brand-sub">
              United for Systems, Communications and Electromechanical Works
            </div>
          </div>
        </Link>

        {/* TOGGLE (mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          style={{ filter: "invert(1)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((l) => (
              <li className="nav-item" key={l.to}>
                <Link
                  className={`nav-link nav-link-custom ${pathname === l.to ? "active" : ""}`}
                  to={l.to}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link className="nav-link nav-link-cta" to="/contact">
            تواصل معنا
          </Link>
        </div>
      </div>
    </nav>
  );
}
