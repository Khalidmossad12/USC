export default function AboutPage() {
  const highlights = [
    { icon: '🏆', title: 'خبرة حكومية موثقة', desc: '49+ مشروع مع أكبر الجهات الحكومية كالأزهر الشريف ووزارة الاتصالات والضرائب' },
    { icon: '🌍', title: 'ماركات عالمية معتمدة', desc: 'موزعون معتمدون لأعرق الشركات العالمية في مجال أنظمة الحماية والأمن' },
    { icon: '👷', title: 'فريق متخصص', desc: 'أكثر من 50 مهندساً وفنياً متخصصاً، متوفرون على مدار الساعة لخدمة عملائنا' },
    { icon: '✅', title: 'مطابق لاشتراطات الدفاع المدني', desc: 'جميع أعمالنا تنفَّذ وفق معايير الدفاع المدني المصري والمواصفات الدولية' },
  ]

  return (
    <section className="py-5" style={{ background: 'var(--off)', minHeight: '100vh' }}>
      <div className="container">

        <div className="row g-5 align-items-center">

          {/* TEXT */}
          <div className="col-lg-6">
            <div className="sec-label">من نحن</div>
            <h2 className="sec-title">18 عاماً من الثقة والتميز</h2>
            <p className="mt-3" style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8 }}>
              تأسست المتحدة للأنظمة والاتصالات والأعمال الكهروميكانيكية عام 2007 في قليوب، القليوبية،
              لتصبح واحدة من أبرز الشركات المتخصصة في أنظمة الحماية من الحرائق والأنظمة الأمنية في مصر.
            </p>
            <p className="mt-2" style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8 }}>
              انطلقنا بتأسيس راسخ في القطاع الحكومي، وبنينا سمعتنا مشروعاً بعد مشروع مع أكبر الجهات
              الحكومية المصرية. واليوم نوسع نطاق خدماتنا لتشمل القطاع الخاص بنفس معايير الجودة والالتزام.
            </p>
            <p className="mt-2" style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8 }}>
              فريقنا من أكثر من 50 مهندساً وفنياً متخصصاً، مدربون على أحدث التقنيات العالمية،
              ومعتمدون من كبرى الشركات الدولية.
            </p>

            {/* STATS */}
            <div className="row g-3 mt-3">
              {[
                { num: '18+', lbl: 'سنة خبرة' },
                { num: '49+', lbl: 'مشروع منجز' },
                { num: '50+', lbl: 'مهندس وفني' },
                { num: '2007', lbl: 'سنة التأسيس' },
              ].map(s => (
                <div key={s.lbl} className="col-6 col-md-3">
                  <div className="text-center p-3" style={{ background: 'var(--navy)', color: 'white' }}>
                    <div style={{ fontFamily: 'var(--fd)', fontSize: 28, fontWeight: 900 }}>{s.num}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 2 }}>{s.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              {highlights.map(h => (
                <div key={h.title} className="card hl-card p-3">
                  <div className="d-flex align-items-start gap-3">
                    <div className="hl-icon">{h.icon}</div>
                    <div>
                      <h6 className="mb-1">{h.title}</h6>
                      <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>{h.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
