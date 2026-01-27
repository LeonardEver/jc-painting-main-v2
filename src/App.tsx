import { useState } from 'react'
import { CheckCircle, Brush, Home as HomeIcon, Wrench } from 'lucide-react'

/* =========================
   LOGO — FULL WIDTH, SEM PADDING
   ========================= */
function Logo() {
  return (
    <div className="w-full bg-black">
      <img
        src="src/logo.png"
        alt="J.C Painting Logo"
        className="w-full h-[220px] md:h-[260px] object-contain"
      />
    </div>
  )
}

/* =========================
   SERVICE CARD (INALTERADO)
   ========================= */
function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.FC<any>
  title: string
  description: string
}) {
  return (
    <div className="space-y-4 text-center">
      <div className="flex justify-center">
        <Icon className="w-10 h-10 text-yellow-600" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-light text-gray-900">{title}</h3>
      <p className="text-gray-600 font-light leading-relaxed text-sm">
        {description}
      </p>
    </div>
  )
}

/* =========================
   APP
   ========================= */
export default function App() {
  const [message, setMessage] = useState('')
  const whatsappNumber = '12393158707'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text =
      message ||
      'Hi, I would like to request a quote for interior painting services.'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`
    window.open(whatsappUrl, '_blank')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-b from-white to-gray-50">

        {/* LOGO FULL WIDTH */}
        <Logo />

        {/* CONTEÚDO COM PADDING */}
        <div className="px-6 py-20 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-light text-gray-600 tracking-wide uppercase">
              Interior Painting & Refinishing
            </p>
            <p className="text-sm text-gray-500 font-light tracking-widest">
              SINCE YOUR HOME DESERVES EXCELLENCE
            </p>
          </div>

          <div className="h-px w-24 bg-yellow-600"></div>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-light">
            Professional painting services tailored to your home. From walls to
            cabinets, we bring precision and care to every project.
          </p>

          <a
            href="#quote"
            className="inline-block bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-gray-900 transition-colors duration-300"
          >
            Request Your Quote
          </a>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Our Services
            </h2>
            <div className="h-px w-16 bg-yellow-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <ServiceCard
              icon={HomeIcon}
              title="Interior Walls"
              description="Complete interior wall painting with premium finishes, color consultation, and preparation."
            />
            <ServiceCard
              icon={Brush}
              title="Cabinet Refinishing"
              description="Professional cabinet painting and refinishing to transform your kitchen or bathroom."
            />
            <ServiceCard
              icon={Wrench}
              title="Accent Details"
              description="Trim work, doors, and decorative finishing touches that elevate your space."
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Why Choose J.C Painting
            </h2>
            <div className="h-px w-16 bg-yellow-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              [
                'Meticulous Attention to Detail',
                'Every brushstroke matters. We treat preparation and finishing with equal importance.',
              ],
              [
                'Respectful of Your Space',
                'We protect your home and keep work areas organized throughout the project.',
              ],
              [
                'Premium Quality Materials',
                'We use quality paints and finishes that last, protecting your investment.',
              ],
              [
                'Professional Communication',
                'Clear timelines, transparent pricing, and responsive throughout your project.',
              ],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4">
                <CheckCircle
                  className="w-6 h-6 text-yellow-600 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-light text-lg mb-2">{title}</h3>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section id="quote" className="py-32 px-6 scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Get Your Quote Today
            </h2>
            <p className="text-gray-600 font-light">
              Tell us about your project and we'll respond promptly via WhatsApp.
            </p>
          </div>

          <div className="h-px w-16 bg-yellow-600 mx-auto mb-12"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={7}
              placeholder="Room size, type of work, color preferences, timeline—anything that helps us understand your project..."
              className="w-full px-6 py-4 border border-gray-300 focus:border-yellow-600 outline-none resize-none font-light"
            />

            <button className="w-full bg-black text-white py-4 text-lg font-light tracking-wide hover:bg-gray-900 transition">
              Send via WhatsApp
            </button>

            <p className="text-center text-xs text-gray-500 font-light">
              Your message will open WhatsApp on your device. No account or
              registration needed.
            </p>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-lg font-light text-yellow-600 tracking-wide">
            J.C PAINTING
          </p>
          <p className="text-xs text-gray-500 font-light">
            © 2026 J.C Painting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
