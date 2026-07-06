import { termsData } from '../data/termsData';

/* ══════════════════════════════════════════════════════════════
   TermsPage — Terms & Conditions Agreement
   ══════════════════════════════════════════════════════════════ */

function Paragraph({ text }) {
  const isClause = /^\((?:[a-z]|\d+)\)/.test(text.trim());
  return (
    <p
      className={`text-gray-600 leading-relaxed text-[15px] ${
        isClause ? 'pl-4 border-l-2 border-primary/15' : ''
      }`}
    >
      {text}
    </p>
  );
}

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Please read these Terms and Conditions carefully before using Ehmar
            Foods.
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 space-y-4">
            {/* Intro */}
            {termsData.intro.map((p, i) => (
              <Paragraph key={`intro-${i}`} text={p} />
            ))}

            {/* Sections */}
            <div className="space-y-10 pt-4">
              {termsData.sections.map((sec) => (
                <div key={sec.n} id={`section-${sec.n}`} className="scroll-mt-24">
                  <h2 className="text-xl font-bold text-dark mb-4 flex items-baseline gap-2">
                    <span className="text-primary">{sec.n}.</span>
                    {sec.title}
                  </h2>
                  <div className="space-y-3">
                    {sec.paragraphs.map((p, i) => (
                      <Paragraph key={`${sec.n}-${i}`} text={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
