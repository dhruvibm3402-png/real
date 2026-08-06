'use client';

export default function VideoShowcase() {
  const steps = ['Consultation', 'Property Selection', 'Site Visit', 'Documentation', 'Ownership'];

  return (
    <section id="process" style={{ background: '#fff', padding: '120px 0', fontFamily: 'Inter, Arial, sans-serif' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <h2 style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0f172a', textAlign: 'center', marginBottom: 60 }}>Our Process</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {steps.map((step, i) => (
            <>
              <div key={step} style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ width: 40, height: 40, border: '1px solid rgba(14,165,233,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: 16, fontWeight: 400, color: '#0f172a' }}>{i + 1}</div>
                <h3 style={{ fontSize: 15, fontWeight: 500, color: '#0f172a' }}>{step}</h3>
              </div>
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} style={{ color: 'rgba(14,165,233,0.3)', fontSize: 24, transform: 'translateY(-15px)' }}>→</div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
