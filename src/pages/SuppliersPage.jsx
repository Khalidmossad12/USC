import { SUPPLIERS } from "../data/project";

export default function SuppliersPage() {
  return (
    <section className="py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="mb-5">
          <div className="sec-label">الموردون المعتمدون</div>
          <h2 className="sec-title">وكلاء لأعرق العلامات العالمية</h2>
          <p className="sec-sub mt-2">
            نعمل مع كبرى الشركات العالمية لضمان أعلى معايير الجودة والموثوقية
          </p>
        </div>

        <div className="row g-3">
          {SUPPLIERS.map((s) => (
            <div key={s.cat} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card sup-card p-3 h-100">
                <div className="sup-cat">{s.cat}</div>
                <div className="sup-brands">{s.brands}</div>
                <div className="sup-origin mt-2">{s.origin}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
