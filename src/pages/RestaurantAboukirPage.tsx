import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Phone } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const RESERVATION = 'https://www.google.com/maps/reserve/v/dine/c/5KahIU38TYI?source=pa&opi=89978449&hl=en-FR&gei=U93faejcK9ns7M8PzKnZoAY&sourceurl=https://www.google.com/async/lcl_pv?vet%3D10CAAQoqAOahcKEwj4tNi2wvCTAxUAAAAAHQAAAAAQCQ..i%26ei%3DTt3faajfJu_V7M8PnaSIsQY%26opi%3D89978449%26cs%3D1%26hl%3Den-FR%26sca_esv%3D55e9f3c856495c1e%26client%3Dfirefox-b-d%26hs%3DyLip%26pvq%3DCg0vZy8xMXJ5ZjM3ODR2IhAKCmljaGkgcmFtZW4QAhgD%26lqi%3DChJpY2hpIHJhbWVuIFJldmlld3MiAjgBSJrBztH1t4CACFoUEAAQARgAGAEiCmljaGkgcmFtZW6SARNqYXBhbmVzZV9yZXN0YXVyYW50%26tbs%3Dlrf:!3sIAE%253D%26q%3Dichi%2Bramen%2BReviews%26fvr%3D1';

export default function RestaurantAboukirPage() {
  return (
    <div>
      {/* HERO */}
      <section className="texture-dark relative overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <ImagePlaceholder label="ICHI RAMEN Aboukir — Façade" style={{ width: '100%', height: '100%' }} />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(14,12,10,0.95) 0%, rgba(14,12,10,0.5) 50%, rgba(14,12,10,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <span className="stamp text-xs mb-4 inline-block">75002 Paris — Aboukir</span>
          <h1 className="font-display" style={{ color: 'var(--cream)', fontSize: 'clamp(42px, 8vw, 96px)', lineHeight: 0.9 }}>
            ICHI RAMEN<br />
            <span style={{ color: 'var(--red)' }}>ABOUKIR</span>
          </h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--red)', marginTop: '14px' }} />
        </div>
        <div
          className="absolute right-8 top-8 font-jp pointer-events-none select-none hidden lg:block"
          style={{ color: 'rgba(192,25,29,0.12)', fontSize: '180px', lineHeight: 1 }}
        >
          浅
        </div>
      </section>

      {/* INTRO */}
      <section className="texture-paper py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-oswald text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--red)' }}>
                Notre restaurant
              </p>
              <h2 className="font-display text-5xl mb-6" style={{ color: 'var(--black)', lineHeight: 0.95 }}>
                UN LIEU<br />UNIQUE
              </h2>
              <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--red)', marginBottom: '24px' }} />
              <p className="font-typewriter text-base leading-relaxed mb-4" style={{ color: 'rgba(14,12,10,0.68)', lineHeight: '1.85' }}>
                Un restaurant immersif inspiré du Japon, où la cuisine rencontre une atmosphère unique.
              </p>
              <p className="font-typewriter text-base leading-relaxed" style={{ color: 'rgba(14,12,10,0.68)', lineHeight: '1.85' }}>
                Entre ramen traditionnels et ambiance graphique, ICHI RAMEN vous invite à vivre une expérience chaleureuse et mémorable.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }} />
                  <div>
                    <p className="font-oswald font-semibold" style={{ color: 'var(--black)' }}>52 Rue d'Aboukir</p>
                    <p className="font-typewriter text-sm" style={{ color: 'rgba(14,12,10,0.5)' }}>75002 Paris</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }} />
                  <div>
                    <p className="font-oswald font-semibold" style={{ color: 'var(--black)' }}>Horaires</p>
                    <p className="font-typewriter text-sm" style={{ color: 'rgba(14,12,10,0.5)' }}>
                      Lundi – Vendredi : 12h00 – 14h30 / 19h00 – 22h30<br />
                      Samedi – Dimanche : 12h00 – 22h30
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }} />
                  <div>
                    <p className="font-oswald font-semibold" style={{ color: 'var(--black)' }}>Réservations</p>
                    <p className="font-typewriter text-sm" style={{ color: 'rgba(14,12,10,0.5)' }}>
                      Via Google Reserve
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={RESERVATION} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Réserver une table
                </a>
                <Link to="/menu-aboukir" className="btn-outline-dark">
                  Voir le menu <ArrowRight size={14} className="inline ml-1" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="manga-panel" style={{ height: '300px' }}>
                <ImagePlaceholder label="Salle principale" style={{ height: '100%', width: '100%' }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="ink-border" style={{ height: '180px' }}>
                  <ImagePlaceholder label="Décor intérieur" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="ink-border mt-4" style={{ height: '180px' }}>
                  <ImagePlaceholder label="Ramen bowl" style={{ height: '100%', width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section className="texture-dark clip-skew py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Ambiance', text: 'Un intérieur baigné de références à la culture japonaise — des panneaux manga aux objets authentiques — pour un dépaysement total.', kanji: '雰', num: '01' },
              { label: 'Saveurs', text: 'Chaque bol est une invitation au voyage. Nos bouillons mijotés 12 heures expriment toute la profondeur de la cuisine japonaise.', kanji: '味', num: '02' },
              { label: 'Service', text: 'Rapide, souriant, attentionné. Chez ICHI RAMEN Aboukir, nous mettons un point d\'honneur à vous faire sentir les bienvenus.', kanji: '歓', num: '03' },
            ].map((item) => (
              <div key={item.num} className="manga-panel-light p-6 relative overflow-hidden">
                <div
                  className="absolute top-2 right-4 font-jp pointer-events-none select-none"
                  style={{ color: 'rgba(242,234,216,0.06)', fontSize: '90px', lineHeight: 1 }}
                >
                  {item.kanji}
                </div>
                <p className="font-display text-5xl mb-3" style={{ color: 'var(--red)' }}>{item.num}</p>
                <h3 className="font-oswald text-xl tracking-widest uppercase mb-3" style={{ color: 'var(--cream)' }}>
                  {item.label}
                </h3>
                <div style={{ width: '30px', height: '3px', backgroundColor: 'var(--red)', marginBottom: '12px' }} />
                <p className="font-typewriter text-sm leading-relaxed" style={{ color: 'rgba(242,234,216,0.6)', lineHeight: '1.7' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="texture-paper py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-5xl mb-4" style={{ color: 'var(--black)' }}>
            PRÊT À VIVRE<br />
            <span style={{ color: 'var(--red)' }}>L'EXPÉRIENCE ?</span>
          </h2>
          <p className="font-typewriter mb-8" style={{ color: 'rgba(14,12,10,0.5)' }}>
            Réservez votre table au ICHI RAMEN Aboukir dès maintenant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={RESERVATION} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Réserver Aboukir
            </a>
            <Link to="/menu-aboukir" className="btn-outline-dark">
              Consulter le menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
