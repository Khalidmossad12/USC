import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/project";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const proj = PROJECTS.find((p) => p.id === id);

  if (!proj)
    return (
      <div className="container py-5 text-center">
        <h3>المشروع غير موجود</h3>
        <Link to="/projects" className="btn btn-navy mt-3">
          ← العودة للمشاريع
        </Link>
      </div>
    );

  return (
    <>
      {/* DETAIL HERO */}
      <div className="detail-hero text-center">
        <div className="container">
          <Link to="/projects" className="back-btn">
            ← العودة للمشاريع
          </Link>
          <h1 className="mt-2">
            {proj.icon} {proj.name}
          </h1>
          <p className="mt-2">{proj.desc}</p>
        </div>
      </div>

      {/* MAMURIYAT */}
      <section className="py-5">
        <div className="container">
          <div className="mb-4">
            <div className="sec-label">المأموريات والمواقع</div>
            <h2 className="sec-title">تفاصيل المشروع</h2>
            <p className="sec-sub mt-1">
              {proj.count} —{" "}
              <span style={{ color: "var(--sky)", fontSize: 12 }}>
                💡 استبدل img: null بمسار الصورة الحقيقية في projects.js
              </span>
            </p>
          </div>

          <div className="row g-4">
            {proj.mamuriyat.map((m) => (
              <div key={m.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card mam-card h-100">
                  {/* IMAGE أو placeholder */}
                  <div className="mam-img">
                    {m.img ? (
                      <img src={m.img} alt={m.name} />
                    ) : (
                      <span style={{ fontSize: 32 }}>{proj.icon}</span>
                    )}
                  </div>

                  <div className="card-body p-3">
                    <div className="mam-sys">{m.sys}</div>
                    <h6 className="mb-1">{m.name}</h6>
                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {m.desc}
                    </p>
                    <span className="mam-status">✓ {m.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BACK BTN */}
          <div className="mt-5">
            <Link to="/projects" className="btn btn-navy px-4">
              ← العودة لكل المشاريع
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
