export default function ContactPage() {
  const contacts = [
    {
      icon: "📍",
      label: "العنوان",
      val: "6 شارع ملوك — أرض الجمعية من الطريق البطيء — قليوب، القليوبية",
    },
    { icon: "📞", label: "تليفون الشركة", val: "01035209400" },
    { icon: "👤", label: "م/ خالد مسعد", val: "01095603594" },
    { icon: "📧", label: "البريد الإلكتروني", val: "usc_eg@yahoo.com" },
  ];

  return (
    <section className="py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="mb-5">
          <div className="sec-label">تواصل معنا</div>
          <h2 className="sec-title">نحن هنا لحمايتك</h2>
          <p className="sec-sub mt-2">
            تواصل معنا للحصول على معاينة مجانية لمنشأتك
          </p>
        </div>

        <div className="row g-5">
          {/* CONTACT INFO */}
          <div className="col-lg-5">
            <h5
              style={{
                fontFamily: "var(--fd)",
                fontWeight: 800,
                color: "var(--navy)",
                marginBottom: 24,
              }}
            >
              بيانات التواصل
            </h5>
            {contacts.map((c) => (
              <div
                key={c.label}
                className="d-flex align-items-start gap-3 mb-4"
              >
                <div className="c-icon-wrap">{c.icon}</div>
                <div>
                  <div className="c-label">{c.label}</div>
                  <div className="c-val">{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="col-lg-7">
            <div className="contact-form-wrap">
              <h5
                style={{
                  fontFamily: "var(--fd)",
                  fontWeight: 800,
                  color: "var(--navy)",
                  marginBottom: 20,
                }}
              >
                اطلب معاينة مجانية
              </h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">الاسم الكامل</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="اسمك"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">رقم الهاتف</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="01xxxxxxxxx"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">نوع المنشأة</label>
                  <select className="form-select">
                    <option value="">اختر نوع المنشأة</option>
                    {[
                      "مصنع",
                      "فندق",
                      "بنك",
                      "مبنى إداري",
                      "مستشفى",
                      "مدرسة",
                      "أخرى",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">الخدمة المطلوبة</label>
                  <select className="form-select">
                    <option value="">اختر الخدمة</option>
                    {[
                      "إنذار ضد الحريق",
                      "إطفاء تلقائي",
                      "كاميرات مراقبة",
                      "إنذار ضد السرقة",
                      "صيانة دورية",
                      "منظومة متكاملة",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">ملاحظات إضافية</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="أي تفاصيل إضافية عن منشأتك..."
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-navy w-100 py-2"
                    onClick={() => alert("شكراً! سيتواصل معك فريقنا قريباً ✅")}
                  >
                    إرسال الطلب
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
