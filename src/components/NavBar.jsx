import { useState, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".main-navbar")) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top main-navbar" style={{ position: 'fixed' }}>
      <div className="d-flex justify-content-between w-100">
        {/* LOGO */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 flex-shrink-1"
          to="/"
          style={{ minWidth: 0 }}
        >
          <div className="logo-circle flex-shrink-0">
            <Logo />
          </div>
          <div style={{ minWidth: 0 }}>
            <div className="brand-name d-none d-lg-block">
              المتحدة للأنظمة والاتصالات والأعمال الكهروميكانيكية
            </div>
            <div className="brand-name d-lg-none">المتحدة للأنظمة</div>
            <div className="brand-sub d-none d-md-block">
              United for Systems, Communications and Electromechanical Works
            </div>
          </div>
        </Link>

        {/* TOGGLE */}
        <button
          className="navbar-toggler border-0 flex-shrink-0"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ filter: "invert(1)" }}
          aria-label="القائمة"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className={`navbar-collapse ${isOpen ? "show" : "collapse"}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((l) => (
              <li className="nav-item" key={l.to}>
                <Link
                  className={`nav-link nav-link-custom ${pathname === l.to ? "active" : ""}`}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            className="nav-link nav-link-cta"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </nav>
  );
}
