'use client';

export default function VideoShowcase() {
  const steps = ['Consultation', 'Property Selection', 'Site Visit', 'Documentation', 'Ownership'];

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <h2 className="process-title">Our Process</h2>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={step} className="process-item-group">
              <div className="process-step">
                <div className="process-circle">{i + 1}</div>
                <h3 className="process-name">{step}</h3>
              </div>
              {i < steps.length - 1 && (
                <div className="process-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .process-section { background: #fff; padding: 120px 0; font-family: Inter, Arial, sans-serif; }
        .process-container { max-width: 1440px; margin: 0 auto; padding: 0 48px; }
        .process-title { font-size: 48px; font-weight: 400; line-height: 1.1; letter-spacing: -0.02em; color: #0f172a; text-align: center; margin-bottom: 60px; }
        
        .process-steps { display: flex; justify-content: space-between; align-items: flex-start; width: 100%; }
        .process-item-group { display: flex; flex-direction: row; align-items: flex-start; flex: 1; }
        .process-item-group:last-child { flex: 0; }
        
        .process-step { display: flex; flex-direction: column; align-items: center; width: 140px; flex-shrink: 0; }
        .process-circle { width: 40px; height: 40px; border: 1px solid rgba(14,165,233,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; font-size: 16px; font-weight: 400; color: #0f172a; }
        .process-name { font-size: 15px; font-weight: 500; color: #0f172a; text-align: center; margin: 0; }
        
        .process-arrow { color: rgba(14,165,233,0.3); font-size: 24px; margin-top: 5px; flex-grow: 1; text-align: center; }

        @media (max-width: 768px) {
          .process-section { padding: 60px 0; }
          .process-container { padding: 0 24px; }
          .process-title { font-size: 36px; margin-bottom: 40px; }
          
          .process-steps { flex-direction: column; align-items: center; }
          .process-item-group { flex-direction: column; align-items: center; width: 100%; flex: auto; margin-bottom: 15px; }
          .process-item-group:last-child { margin-bottom: 0; }
          
          .process-step { width: auto; }
          
          .process-arrow { transform: rotate(90deg); margin: 10px 0; flex-grow: 0; }
        }
      `}</style>
    </section>
  );
}
