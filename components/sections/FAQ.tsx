'use client';

export default function FAQ() {
  return (
    <section className="faq-section" style={{ background: '#16181d', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: 'Inter, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .faq-section { padding: 40px 0 !important; }
          .faq-wrap { flex-direction: column !important; align-items: flex-start !important; padding: 0 20px !important; gap: 20px; }
          .faq-title { font-size: 28px !important; }
          .faq-form { width: 100% !important; flex-wrap: wrap; }
          .faq-form button { width: 100%; }
        }
      `}</style>
      <div className="faq-wrap" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="faq-title" style={{ fontSize: 36, fontWeight: 400, margin: 0, color: '#fff', letterSpacing: '-0.02em' }}>Stay Updated</h2>
        <form className="faq-form" onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: 10, width: 500 }}>
          <input type="email" placeholder="Enter your email" required
            style={{ flex: 1, minWidth: 200, padding: '14px 20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, outline: 'none', fontSize: 15, background: 'transparent', color: '#fff' }}
            onFocus={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#0ea5e9'}
            onBlur={e => (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'} />
          <button type="submit" style={{ padding: '14px 28px', border: '1px solid #0f172a', background: '#0f172a', color: '#fff', fontFamily: 'inherit', fontSize: 13, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, borderRadius: 4, cursor: 'pointer', whiteSpace: 'nowrap' }}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
