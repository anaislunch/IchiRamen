import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { reviews } from '../data/reviews';

const SAINT_DENIS_RESERVATION = 'https://www.google.com/maps/reserve/v/dine/c/6jIkACpyeJ0?source=pa&opi=89978449&hl=en-FR';
const ABOUKIR_RESERVATION = 'https://www.google.com/maps/reserve/v/dine/c/5KahIU38TYI?source=pa&opi=89978449&hl=en-FR&gei=U93faejcK9ns7M8PzKnZoAY&sourceurl=https://www.google.com/async/lcl_pv?vet%3D10CAAQoqAOahcKEwj4tNi2wvCTAxUAAAAAHQAAAAAQCQ..i%26ei%3DTt3faajfJu_V7M8PnaSIsQY%26opi%3D89978449%26cs%3D1%26hl%3Den-FR%26sca_esv%3D55e9f3c856495c1e%26client%3Dfirefox-b-d%26hs%3DyLip%26pvq%3DCg0vZy8xMXJ5ZjM3ODR2IhAKCmljaGkgcmFtZW4QAhgD%26lqi%3DChJpY2hpIHJhbWVuIFJldmlld3MiAjgBSJrBztH1t4CACFoUEAAQARgAGAEiCmljaGkgcmFtZW6SARNqYXBhbmVzZV9yZXN0YXVyYW50%26tbs%3Dlrf:!3sIAE%253D%26q%3Dichi%2Bramen%2BReviews%26fvr%3D1';

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="texture-dark relative overflow-hidden"
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(192,25,29,0.04) 0, rgba(192,25,29,0.04) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(192,25,29,0.04) 0, rgba(192,25,29,0.04) 1px, transparent 1px, transparent 60px)',
          }}
        />
        <div
          className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
          style={{ borderLeft: '4px solid rgba(192,25,29,0.15)' }}
        />
        <div
          className="absolute font-jp text-right pointer-events-none select-none hidden lg:block"
          style={{
            color: 'rgba(192,25,29,0.06)',
            fontSize: '260px',
            lineHeight: 1,
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            letterSpacing: '-0.05em',
          }}
        >
          一
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="stamp text-sm">Paris — 75002</span>
            </div>

            <h1
              className="font-display leading-none mb-2"
              style={{ color: 'var(--cream)', fontSize: 'clamp(72px, 12vw, 160px)' }}
            >
              ICHI
            </h1>
            <h1
              className="font-display leading-none mb-6"
              style={{ color: 'var(--red)', fontSize: 'clamp(72px, 12vw, 160px)', textShadow: '4px 4px 0 rgba(139,15,18,0.4)' }}
            >
              RAMEN
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: '48px', height: '3px', backgroundColor: 'var(--red)' }} />
              <p
                className="font-jp text-base"
                style={{ color: 'rgba(242,234,216,0.6)', letterSpacing: '0.15em' }}
              >
                Un voyage culinaire japonais au cœur de Paris
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
              <Link to="/restaurants" className="btn-primary">
                Voir les restaurants
              </Link>
              <Link to="/menu-saint-denis" className="btn-secondary">
                Voir les menus
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={SAINT_DENIS_RESERVATION} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: 'var(--red)', color: 'var(--red)', boxShadow: '4px 4px 0 var(--red)' }}>
                Réserver Saint-Denis
              </a>
              <a href={ABOUKIR_RESERVATION} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: 'var(--red)', color: 'var(--red)', boxShadow: '4px 4px 0 var(--red)' }}>
                Réserver Aboukir
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="manga-panel-light" style={{ height: '520px' }}>
              <ImagePlaceholder label="Photo restaurant" style={{ height: '100%', width: '100%' }} />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: 'var(--red)' }}
        />
      </section>

      {/* ── MANIFESTE ── */}
      <section className="texture-paper diagonal-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="manga-panel" style={{ height: '380px' }}>
                <ImagePlaceholder label="Intérieur du restaurant" style={{ height: '100%', width: '100%' }} />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="mb-3 flex items-center gap-4">
                <div style={{ width: '6px', height: '60px', backgroundColor: 'var(--red)' }} />
                <h2 className="font-display text-5xl md:text-6xl" style={{ color: 'var(--black)' }}>
                  NOTRE<br />HISTOIRE
                </h2>
              </div>
              <div
                className="ink-border p-8 rotate-pos"
                style={{ backgroundColor: 'var(--cream-dark)' }}
              >
                <div
                  className="font-jp text-4xl mb-4 pointer-events-none select-none"
                  style={{ color: 'rgba(192,25,29,0.15)' }}
                >
                  物語
                </div>
                <p
                  className="font-typewriter text-base leading-relaxed"
                  style={{ color: 'var(--ink)', lineHeight: '1.8' }}
                >
                  Passionnée par les dessins animés, et en particulier par les mangas, la culture japonaise et son art culinaire d'une grande richesse, j'ai décidé de partager cet univers à travers un lieu de restauration qui lui serait entièrement dédié. Cette idée originale m'a été transmise par mes ancêtres, depuis 1926, comme un héritage familial. En espérant que vous et votre palais apprécierez partir à la découverte de mes passions, je vous souhaite la bienvenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UNIVERS ── */}
      <section className="texture-dark clip-skew py-28" style={{ marginTop: '-3px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="font-jp text-sm tracking-widest mb-4"
                style={{ color: 'var(--red)', letterSpacing: '0.3em' }}
              >
                宇宙 — L'UNIVERS
              </p>
              <h2 className="font-display mb-6" style={{ color: 'var(--cream)', fontSize: 'clamp(42px, 6vw, 72px)', lineHeight: '0.95' }}>
                UNE EXPÉRIENCE<br />
                <span style={{ color: 'var(--red)' }}>IMMERSIVE</span>
              </h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--red)', marginBottom: '24px' }} />
              <p className="font-typewriter text-base leading-relaxed mb-4" style={{ color: 'rgba(242,234,216,0.78)', lineHeight: '1.9' }}>
                ICHI RAMEN est un lieu pensé comme une immersion.
              </p>
              <p className="font-typewriter text-base leading-relaxed mb-4" style={{ color: 'rgba(242,234,216,0.78)', lineHeight: '1.9' }}>
                Entre culture japonaise, inspirations manga et cuisine généreuse, chaque détail est conçu pour offrir une expérience à la fois visuelle et gustative.
              </p>
              <p className="font-typewriter text-base leading-relaxed" style={{ color: 'rgba(242,234,216,0.78)', lineHeight: '1.9' }}>
                Dans une ambiance chaleureuse et vivante, nous proposons des ramens savoureux, des plats authentiques et un décor qui invite au voyage.
              </p>
              <div className="mt-8">
                <Link to="/menu-saint-denis" className="btn-primary">
                  Découvrir les menus <ArrowRight size={16} className="inline ml-2" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="manga-panel-light" style={{ height: '260px' }}>
                <ImagePlaceholder label="Ramen bowl" style={{ height: '100%', width: '100%' }} />
              </div>
              <div className="manga-panel-light mt-8" style={{ height: '260px' }}>
                <ImagePlaceholder label="Ramen bowl" style={{ height: '100%', width: '100%' }} />
              </div>
              <div className="manga-panel-light -mt-4" style={{ height: '200px' }}>
                <ImagePlaceholder label="Décor intérieur" style={{ height: '100%', width: '100%' }} />
              </div>
              <div className="manga-panel-light mt-4" style={{ height: '200px' }}>
                <ImagePlaceholder label="Cuisine" style={{ height: '100%', width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESTAURANTS ── */}
      <section className="texture-paper py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="font-oswald text-sm tracking-widest uppercase mb-2" style={{ color: 'var(--red)' }}>
              Deux adresses à Paris
            </p>
            <h2 className="font-display text-5xl md:text-7xl" style={{ color: 'var(--black)' }}>
              NOS RESTAURANTS
            </h2>
            <p className="font-typewriter mt-4" style={{ color: 'rgba(14,12,10,0.55)' }}>
              Deux adresses à Paris pour découvrir notre univers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                name: 'Saint-Denis',
                address: '135 Rue Saint-Denis',
                city: '75002 Paris',
                to: '/restaurant-saint-denis',
                menuTo: '/menu-saint-denis',
                reservation: SAINT_DENIS_RESERVATION,
                kanji: '聖',
              },
              {
                name: 'Aboukir',
                address: "52 Rue d'Aboukir",
                city: '75002 Paris',
                to: '/restaurant-aboukir',
                menuTo: '/menu-aboukir',
                reservation: ABOUKIR_RESERVATION,
                kanji: '浅',
              },
            ].map((r) => (
              <div key={r.name} className="manga-panel texture-dark overflow-hidden" style={{ position: 'relative' }}>
                <div style={{ height: '240px' }}>
                  <ImagePlaceholder label={`ICHI RAMEN ${r.name} — Extérieur`} style={{ height: '100%', width: '100%' }} />
                </div>
                <div
                  className="absolute top-4 right-4 font-jp text-6xl pointer-events-none select-none"
                  style={{ color: 'rgba(192,25,29,0.2)', lineHeight: 1 }}
                >
                  {r.kanji}
                </div>
                <div className="p-6">
                  <p className="font-oswald text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--red)' }}>
                    ICHI RAMEN
                  </p>
                  <h3 className="font-display text-4xl mb-3" style={{ color: 'var(--cream)' }}>
                    {r.name.toUpperCase()}
                  </h3>
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--red)' }} />
                    <p className="font-typewriter text-sm" style={{ color: 'rgba(242,234,216,0.65)' }}>
                      {r.address}<br />{r.city}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Link to={r.to} className="btn-secondary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                      Voir le restaurant
                    </Link>
                    <Link to={r.menuTo} className="btn-secondary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                      Le menu
                    </Link>
                    <a href={r.reservation} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                      Réserver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="texture-red clip-skew-rev py-28" style={{ marginTop: '-3px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <p className="font-oswald text-sm tracking-widest uppercase mb-2" style={{ color: 'rgba(242,234,216,0.6)' }}>
              Avis clients — Google
            </p>
            <h2 className="font-display text-5xl md:text-7xl" style={{ color: 'var(--cream)' }}>
              ILS EN PARLENT
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--cream)', marginTop: '12px' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r, i) => (
              <ReviewCard
                key={r.id}
                review={r}
                rotateClass={i === 1 ? 'rotate-neg' : i === 2 ? 'rotate-pos' : ''}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl">
            {reviews.slice(3).map((r, i) => (
              <ReviewCard
                key={r.id}
                review={r}
                rotateClass={i === 0 ? 'rotate-pos' : 'rotate-neg'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="texture-dark py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div
            className="font-jp text-7xl mb-4 select-none"
            style={{ color: 'rgba(192,25,29,0.15)' }}
          >
            いらっしゃいませ
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-4" style={{ color: 'var(--cream)' }}>
            VENEZ VIVRE<br />
            <span style={{ color: 'var(--red)' }}>L'EXPÉRIENCE</span>
          </h2>
          <p className="font-typewriter mb-8" style={{ color: 'rgba(242,234,216,0.55)' }}>
            Réservez votre table dans l'un de nos deux restaurants parisiens
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SAINT_DENIS_RESERVATION} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Réserver Saint-Denis
            </a>
            <a href={ABOUKIR_RESERVATION} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Réserver Aboukir
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
