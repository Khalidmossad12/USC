import { useState } from 'react'

export default function ContactPage() {
  const WHATSAPP_NUMBER = '201095603594' // رقمك بصيغة دولية بدون + أو صفر في الأول

  const [form, setForm] = useState({
    name: '',
    phone: '',
    facilityType: '',
    service: '',
    notes: '',
  })

  const contacts = [
    { icon: '📍', label: 'العنوان',          val: '6 شارع ملوك — أرض الجمعية من الطريق البطيء — قليوب، القليوبية' },
    { icon: '📞', label: 'تليفون الشركة',    val: '01035209400' },
    { icon: '👤', label: 'م/ خالد مسعد',     val: '01095603594' },
    { icon: '📧', label: 'البريد الإلكتروني', val: 'usc_eg@yahoo.com' },
  ]

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert('من فضلك أدخل الاسم ورقم الهاتف على الأقل')
      return
    }

    const message = `
🔴 *طلب معاينة جديد — موقع المتحدة*

👤 *الاسم:* ${form.name}
📞 *الهاتف:* ${form.phone}
🏢 *نوع المنشأة:* ${form.facilityType || 'غير محدد'}
🔧 *الخدمة المطلوبة:* ${form.service || 'غير محدد'}
📝 *ملاحظات:* ${form.notes || 'لا يوجد'}
    `.trim()

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className="py-5" style={{ minHeight: '100vh' }}>
      <div className="container">

        <div className="mb-5">
          <div className="sec-label">تواصل معنا</div>
          <h2 className="sec-title">نحن هنا لحمايتك</h2>
          <p className="sec-sub mt-2">تواصل معنا للحصول على معاينة مجانية لمنشأتك</p>
        </div>

        <div className="row g-5">

          {/* CONTACT INFO */}
          <div className="col-lg-5">
            <h5 style={{ fontFamily: 'var(--fd)', fontWeight: 800, color: 'var(--navy)', marginBottom: 24 }}>
              بيانات التواصل
            </h5>
            {contacts.map(c => (
              <div key={c.label} className="d-flex align-items-start gap-3 mb-4">
                <div className="c-icon-wrap">{c.icon}</div>
                <div>
                  <div className="c-label">{c.label}</div>
                  <div className="c-val">{c.val}</div>
                </div>
              </div>
            ))}

            {/* مباشر واتساب */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn w-100 py-2 mt-2"
              style={{ background: '#25D366', color: 'white', fontFamily: 'var(--fd)', fontWeight: 700 }}
            >
              💬 تواصل مباشر على واتساب
            </a>
          </div>

          {/* FORM */}
          <div className="col-lg-7">
            <div className="contact-form-wrap">
              <h5 style={{ fontFamily: 'var(--fd)', fontWeight: 800, color: 'var(--navy)', marginBottom: 20 }}>
                اطلب معاينة مجانية
              </h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">الاسم الكامل</label>
                  <input
                    type="text" name="name" className="form-control"
                    placeholder="اسمك" value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">رقم الهاتف</label>
                  <input
                    type="tel" name="phone" className="form-control"
                    placeholder="01xxxxxxxxx" value={form.phone} onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">نوع المنشأة</label>
                  <select name="facilityType" className="form-select" value={form.facilityType} onChange={handleChange}>
                    <option value="">اختر نوع المنشأة</option>
                    {['مصنع','فندق','بنك','مبنى إداري','مستشفى','مدرسة','أخرى'].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">الخدمة المطلوبة</label>
                  <select name="service" className="form-select" value={form.service} onChange={handleChange}>
                    <option value="">اختر الخدمة</option>
                    {['إنذار ضد الحريق','إطفاء تلقائي','كاميرات مراقبة','إنذار ضد السرقة','صيانة دورية','منظومة متكاملة'].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">ملاحظات إضافية</label>
                  <textarea
                    name="notes" className="form-control" rows={3}
                    placeholder="أي تفاصيل إضافية عن منشأتك..."
                    value={form.notes} onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-navy w-100 py-2" onClick={handleSubmit}>
                    إرسال الطلب عبر واتساب 💬
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
