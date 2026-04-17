import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const SAINT_DENIS_RESERVATION = 'https://www.google.com/maps/reserve/v/dine/c/6jIkACpyeJ0?source=pa&opi=89978449&hl=en-FR';
const ABOUKIR_RESERVATION = 'https://www.google.com/maps/reserve/v/dine/c/5KahIU38TYI?source=pa&opi=89978449&hl=en-FR&gei=U93faejcK9ns7M8PzKnZoAY&sourceurl=https://www.google.com/async/lcl_pv?vet%3D10CAAQoqAOahcKEwj4tNi2wvCTAxUAAAAAHQAAAAAQCQ..i%26ei%3DTt3faajfJu_V7M8PnaSIsQY%26opi%3D89978449%26cs%3D1%26hl%3Den-FR%26sca_esv%3D55e9f3c856495c1e%26client%3Dfirefox-b-d%26hs%3DyLip%26pvq%3DCg0vZy8xMXJ5ZjM3ODR2IhAKCmljaGkgcmFtZW4QAhgD%26lqi%3DChJpY2hpIHJhbWVuIFJldmlld3MiAjgBSJrBztH1t4CACFoUEAAQARgAGAEiCmljaGkgcmFtZW6SARNqYXBhbmVzZV9yZXN0YXVyYW50%26tbs%3Dlrf:!3sIAE%253D%26q%3Dichi%2Bramen%2BReviews%26fvr%3D1';

const restaurants = [
  {
    key: 'saint-denis',
    title: 'Saint-Denis',
    address: '135 Rue Saint-Denis',
    city: '75002 Paris',
    hours: 'Lundi – Dimanche : 12h00 – 22h30',
    to: '/restaurant-saint-denis',
    menuTo: '/menu-saint-denis',
    reservation: SAINT_DENIS_RESERVATION,
    kanji: '聖',
    desc: 'Le berceau d\'ICHI RAMEN. Un espace chaleureux au cœur du 2e arrondissement, imprégné de culture manga et de saveurs japonaises authentiques.',
    googleMaps: 'https://www.google.com/maps/search/135+Rue+Saint-Denis,+75002+Paris',
  },
  {
    key: 'aboukir',
    title: 'Aboukir',
    address: "52 Rue d'Aboukir",
    city: '75002 Paris',
    hours: 'Lundi – Dimanche : 12h00 – 22h30',
    to: '/restaurant-aboukir',
    menuTo: '/menu-aboukir',
    reservation: ABOUKIR_RESERVATION,
    kanji: '浅',
    desc: "La deuxième adresse d'ICHI RAMEN, rue d'Aboukir. Même philosophie, même passion — une immersion totale dans l'univers japonais.",
    googleMaps: "https://www.google.com/maps/search/52+Rue+d'Aboukir,+75002+Paris",
  },
];

export default function RestaurantsPage() {
  return (
    <div>
      {/* HEADER */}
      <section className="texture-dark py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(192,25,29,0.04) 0, rgba(192,25,29,0.04) 1px, transparent 1px, transparent 60px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-4">
            <span className="stamp text-xs">Deux adresses — Paris 2e</span>
          </div>
          <h1 className="font-display mb-4" style={{ color: 'var(--cream)', fontSize: 'clamp(48px, 8vw, 100px)', lineHeight: 0.9 }}>
            NOS<br />
            <span style={{ color: 'var(--red)' }}>RESTAURANTS</span>
          </h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--red)', marginTop: '16px' }} />
          <p className="font-typewriter mt-6 max-w-lg" style={{ color: 'rgba(242,234,216,0.6)' }}>
            Découvrez nos deux adresses parisiennes, deux univers, une même passion pour le ramen authentique.
          </p>
        </div>
        <div
          className="absolute right-8 top-8 font-jp pointer-events-none select-none hidden lg:block"
          style={{ color: 'rgba(192,25,29,0.08)', fontSize: '180px', lineHeight: 1 }}
        >
          麺
        </div>
      </section>

      {/* RESTAURANTS */}
      <section className="texture-paper py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {restaurants.map((r, idx) => (
              <div
                key={r.key}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                style={{ direction: idx % 2 === 1 ? 'rtl' : 'ltr' }}
              >
                <div style={{ direction: 'ltr' }} className="manga-panel overflow-hidden">
                  <ImagePlaceholder
                    label={`ICHI RAMEN ${r.title} — Extérieur`}
                    style={{ height: '100%', minHeight: '320px', width: '100%' }}
                  />
                </div>
                <div style={{ direction: 'ltr' }} className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-jp text-3xl pointer-events-none select-none"
                      style={{ color: 'var(--red)', opacity: 0.5 }}
                    >
                      {r.kanji}
                    </span>
                    <span className="font-oswald text-xs tracking-widest uppercase" style={{ color: 'rgba(14,12,10,0.4)' }}>
                      ICHI RAMEN
                    </span>
                  </div>
                  <h2 className="font-display text-6xl md:text-7xl mb-4" style={{ color: 'var(--black)', lineHeight: 0.9 }}>
                    {r.title.toUpperCase()}
                  </h2>
                  <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--red)', marginBottom: '20px' }} />

                  <p className="font-typewriter text-base leading-relaxed mb-6" style={{ color: 'rgba(14,12,10,0.65)', lineHeight: '1.8' }}>
                    {r.desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }} />
                      <div>
                        <p className="font-oswald text-sm font-semibold" style={{ color: 'var(--black)' }}>{r.address}</p>
                        <p className="font-typewriter text-sm" style={{ color: 'rgba(14,12,10,0.55)' }}>{r.city}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--red)' }} />
                      <p className="font-typewriter text-sm" style={{ color: 'rgba(14,12,10,0.55)' }}>{r.hours}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link to={r.to} className="btn-primary" style={{ fontSize: '13px', padding: '10px 22px' }}>
                      Voir le restaurant <ArrowRight size={14} className="inline ml-1" />
                    </Link>
                    <Link to={r.menuTo} className="btn-outline-dark" style={{ fontSize: '13px', padding: '10px 22px' }}>
                      Voir le menu
                    </Link>
                    <a href={r.reservation} target="_blank" rel="noopener noreferrer" className="btn-outline-dark" style={{ fontSize: '13px', padding: '10px 22px', borderColor: 'var(--red)', color: 'var(--red)', boxShadow: '4px 4px 0 var(--red)' }}>
                      Réserver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="texture-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl mb-10 text-center" style={{ color: 'var(--cream)' }}>
            NOUS TROUVER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((r) => (
              <a
                key={r.key}
                href={r.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="manga-panel-light p-6 block no-underline transition-opacity hover:opacity-80"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <p className="font-oswald text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--red)' }}>
                  ICHI RAMEN
                </p>
                <h3 className="font-display text-3xl mb-3" style={{ color: 'var(--cream)' }}>
                  {r.title.toUpperCase()}
                </h3>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--red)' }} />
                  <p className="font-typewriter text-sm" style={{ color: 'rgba(242,234,216,0.6)' }}>
                    {r.address}, {r.city}
                  </p>
                </div>
                <p
                  className="font-oswald text-xs tracking-widest uppercase mt-4"
                  style={{ color: 'rgba(192,25,29,0.7)' }}
                >
                  Voir sur Google Maps →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
