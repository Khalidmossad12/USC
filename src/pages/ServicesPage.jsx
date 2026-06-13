import { SERVICES } from "../data/project";

export default function ServicesPage() {
  return (
    <section className="py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="mb-5">
          <div className="sec-label">خدماتنا</div>
          <h2 className="sec-title">أنظمة متكاملة للحماية والأمن</h2>
          <p className="sec-sub mt-2">
            نوفر حلولاً شاملة لحماية منشأتك بأعلى معايير السلامة والجودة
          </p>
        </div>

        <div className="row g-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="col-lg-4 col-md-6">
              <div className="card svc-card p-4 h-100">
                <div className="svc-icon">{s.icon}</div>
                <h5 className="mb-2">{s.title}</h5>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
                <div className="svc-brands mt-auto pt-2">{s.brands}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
