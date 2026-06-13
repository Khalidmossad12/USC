import { Link } from "react-router-dom";
import { SERVICES } from "../data/project";
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section text-center">
        <div className=" position-relative w-100" style={{ zIndex: 1 }}>
          <div className="hero-badge">
            🛡️ متخصصون في أنظمة الحماية والأمن منذ 2007
          </div>
          <h1 className="hero-title mt-2">
            نحمي ما يهمك
            <span>بأحدث أنظمة الإطفاء والإنذار</span>
          </h1>
          <p className="hero-sub mx-auto">
            المتحدة للأنظمة والاتصالات — 20+ عاماً من الخبرة في تصميم وتركيب
            وصيانة أنظمة الحماية من الحريق والأمن للمنشآت الحكومية والخاصة.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contact" className="btn btn-sky px-4 py-2">
              اطلب معاينة مجانية
            </Link>
            <Link to="/projects" className="btn btn-outline-light px-4 py-2">
              مشاريعنا
            </Link>
          </div>

          {/* STATS */}
          <div className="hero-stat-wrap">
            <div className="row justify-content-center g-0">
              {[
                { num: "20+", lbl: "سنة خبرة" },
                { num: "49+", lbl: "مشروع منجز" },
                { num: "30+", lbl: "مهندس وفني" },
                { num: "2007", lbl: "سنة التأسيس" },
              ].map((s, i, arr) => (
                <div key={s.lbl} className="col-auto d-flex align-items-center">
                  <div className="hero-stat text-center px-4">
                    <div className="num">{s.num}</div>
                    <div className="lbl">{s.lbl}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hero-stat-divider" style={{ height: 40 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-5">
        <div className="container">
          <div className="mb-4">
            <div className="sec-label">خدماتنا</div>
            <h2 className="sec-title">أنظمة متكاملة للحماية والأمن</h2>
            <p className="sec-sub mt-2">
              حلول شاملة لحماية منشأتك بأعلى معايير السلامة والجودة
            </p>
          </div>
          <div className="row g-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card svc-card p-3 h-100">
                  <div className="svc-icon">{s.icon}</div>
                  <h5 className="mb-2">{s.title}</h5>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div className="svc-brands">{s.brands}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-navy px-4 py-2">
              عرض كل الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-5" style={{ background: "var(--navy)" }}>
        <div className="container text-center">
          <h3 className="sec-title-white mb-3">منشأتك تستحق الحماية الأفضل</h3>
          <p className="sec-sub-white mb-4 mx-auto" style={{ maxWidth: 500 }}>
            تواصل معنا الآن للحصول على معاينة مجانية لمنشأتك وتقييم احتياجاتك من
            أنظمة الحماية
          </p>
          <Link to="/contact" className="btn btn-sky px-5 py-2">
            اطلب معاينة مجانية
          </Link>
        </div>
      </section>
    </>
  );
}
