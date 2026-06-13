import { Link } from "react-router-dom";
import { PROJECTS } from "../data/project";

export default function ProjectsPage() {
  return (
    <section
      className="py-5"
      style={{ background: "var(--off)", minHeight: "100vh" }}
    >
      <div className="container">
        {/* HEADER */}
        <div className="mb-5">
          <div className="sec-label">مشاريعنا</div>
          <h2 className="sec-title">أبرز المشاريع المنجزة</h2>
          <p className="sec-sub mt-2">
            اضغط على أي مشروع لرؤية تفاصيل المأموريات والمواقع
          </p>
        </div>

        {/* GRID */}
        <div className="row g-4">
          {PROJECTS.map((p) => (
            <div key={p.id} className="col-lg-3 col-md-6">
              <Link
                to={`/projects/${p.id}`}
                className="proj-card card h-100 text-decoration-none"
              >
                <div className="proj-img">{p.icon}</div>
                <div className="card-body p-3">
                  <span className="proj-tag">{p.tag}</span>
                  <h5 className="mt-2 mb-1">{p.name}</h5>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {p.desc}
                  </p>
                  <div className="proj-count">📍 {p.count} — اضغط للتفاصيل</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
