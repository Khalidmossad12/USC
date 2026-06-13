import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/services", label: "خدماتنا" },
  { to: "/projects", label: "مشاريعنا" },
  { to: "/clients", label: "عملاؤنا" },
  { to: "/suppliers", label: "الموردون" },
  { to: "/about", label: "من نحن" },
  { to: "/contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer className="main-footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* BRAND */}
          <div className="col-lg-5 col-md-12">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  padding: 4,
                }}
              >
                <img
                  src={logoImg}
                  alt="Al Muttahida Systems"
                  className="logo-img"
                />
              </div>
              <div>
                <div className="footer-brand-name">
                  المتحدة للأنظمة والاتصالات والاعمال الكهروميكانيكية
                </div>
                <div className="footer-brand-sub">
                  United for Systems, Communications and Electromechanical Works
                  — Est. 2007
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.4)",
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              متخصصون في أنظمة الحماية من الحرائق والأنظمة الأمنية
              والكهروميكانيكية — قليوب، القليوبية.
            </p>
          </div>

          {/* LINKS */}
          <div className="col-lg-3 col-md-6 col-6">
            <div className="footer-col-title">روابط سريعة</div>
            {links.map((l) => (
              <Link key={l.to} className="footer-link" to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <div className="col-lg-4 col-md-6 col-6">
            <div className="footer-col-title">تواصل معنا</div>
            <a className="footer-link" href="tel:01035209400">
              📞 01035209400
            </a>
            <a className="footer-link" href="tel:01095603594">
              📞 01095603594
            </a>
            <a className="footer-link" href="mailto:usc_eg@yahoo.com">
              📧 usc_eg@yahoo.com
            </a>
            <span className="footer-link">📍 قليوب، القليوبية — مصر</span>
          </div>
        </div>

        {/* BOTTOM */}
        <hr className="footer-divider" />
        <div className="d-flex justify-content-between flex-wrap gap-2">
          <p className="footer-copy mb-0">
            © 2025 المتحدة للأنظمة والاتصالات — جميع الحقوق محفوظة
          </p>
          <p className="footer-copy mb-0">سجل تجاري 27971 · تأسست 2007</p>
        </div>
      </div>
    </footer>
  );
}
