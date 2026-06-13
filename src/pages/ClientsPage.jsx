import { CLIENTS } from "../data/project";

export default function ClientsPage() {
  return (
    <section
      className="py-5"
      style={{ background: "var(--navy)", minHeight: "100vh" }}
    >
      <div className="container">
        <div className="mb-5">
          <div className="sec-label">عملاؤنا</div>
          <h2 className="sec-title-white">ثقة المنشآت الكبرى</h2>
          <p className="sec-sub-white mt-2">
            شركاء موثوقون لكبرى الجهات الحكومية والخاصة في مصر
          </p>
        </div>

        <div className="row g-3">
          {CLIENTS.map((c) => (
            <div key={c.org} className="col-lg-4 col-md-6">
              <div className="card client-card p-3 h-100">
                <div className="org">{c.org}</div>
                <div className="work mt-1">{c.work}</div>
                <span className="client-badge">{c.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
