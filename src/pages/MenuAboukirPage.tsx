import { Link } from 'react-router-dom';
import MenuSection from '../components/MenuSection';
import { menuAboukir } from '../data/menuAboukir';

const RESERVATION = 'https://www.google.com/maps/reserve/v/dine/c/5KahIU38TYI?source=pa&opi=89978449&hl=en-FR&gei=U93faejcK9ns7M8PzKnZoAY&sourceurl=https://www.google.com/async/lcl_pv?vet%3D10CAAQoqAOahcKEwj4tNi2wvCTAxUAAAAAHQAAAAAQCQ..i%26ei%3DTt3faajfJu_V7M8PnaSIsQY%26opi%3D89978449%26cs%3D1%26hl%3Den-FR%26sca_esv%3D55e9f3c856495c1e%26client%3Dfirefox-b-d%26hs%3DyLip%26pvq%3DCg0vZy8xMXJ5ZjM3ODR2IhAKCmljaGkgcmFtZW4QAhgD%26lqi%3DChJpY2hpIHJhbWVuIFJldmlld3MiAjgBSJrBztH1t4CACFoUEAAQARgAGAEiCmljaGkgcmFtZW6SARNqYXBhbmVzZV9yZXN0YXVyYW50%26tbs%3Dlrf:!3sIAE%253D%26q%3Dichi%2Bramen%2BReviews%26fvr%3D1';

export default function MenuAboukirPage() {
  return (
    <div>
      {/* HEADER */}
      <section className="texture-dark relative overflow-hidden py-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(192,25,29,0.04) 0, rgba(192,25,29,0.04) 1px, transparent 1px, transparent 60px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="font-oswald text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(192,25,29,0.7)' }}>
                ICHI RAMEN — 52 Rue d'Aboukir, 75002 Paris
              </p>
              <h1 className="font-display" style={{ color: 'var(--cream)', fontSize: 'clamp(44px, 8vw, 96px)', lineHeight: 0.9 }}>
                MENU<br />
                <span style={{ color: 'var(--red)' }}>ABOUKIR</span>
              </h1>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--red)', marginTop: '14px' }} />
              <p className="font-typewriter mt-4" style={{ color: 'rgba(242,234,216,0.45)', fontSize: '13px' }}>
                Tous les prix sont indiqués TTC. Service non compris.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={RESERVATION} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Réserver Aboukir
              </a>
              <Link to="/restaurant-aboukir" className="btn-secondary">
                Le restaurant
              </Link>
              <Link to="/menu-saint-denis" className="btn-secondary" style={{ borderColor: 'rgba(242,234,216,0.3)', color: 'rgba(242,234,216,0.5)', boxShadow: '4px 4px 0 rgba(242,234,216,0.3)' }}>
                Menu Saint-Denis →
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute right-4 top-4 font-jp pointer-events-none select-none hidden lg:block"
          style={{ color: 'rgba(192,25,29,0.07)', fontSize: '220px', lineHeight: 1 }}
        >
          食
        </div>
      </section>

      {/* MENU CONTENT */}
      <section className="texture-paper py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10 ink-border p-6" style={{ backgroundColor: 'rgba(14,12,10,0.04)' }}>
            <p className="font-jp text-center text-sm" style={{ color: 'rgba(14,12,10,0.35)', letterSpacing: '0.3em' }}>
              いらっしゃいませ — Bienvenue
            </p>
            <p className="font-typewriter text-center text-sm mt-2" style={{ color: 'rgba(14,12,10,0.45)' }}>
              Nos bouillons sont mijotés pendant 12 heures pour vous offrir des saveurs profondes et authentiques.
            </p>
          </div>

          <MenuSection categories={menuAboukir} />

          <div className="mt-14 texture-dark manga-panel p-8 text-center">
            <p className="font-jp text-3xl mb-2" style={{ color: 'rgba(242,234,216,0.2)' }}>ご馳走様</p>
            <p className="font-oswald text-xs tracking-widest uppercase mb-6" style={{ color: 'rgba(242,234,216,0.4)' }}>
              Allergènes disponibles sur demande auprès de notre équipe
            </p>
            <a href={RESERVATION} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Réserver une table — Aboukir
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
