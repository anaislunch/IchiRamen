import { Link } from 'react-router-dom';
import { MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="texture-dark" style={{ borderTop: '4px solid var(--red)' }}>
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <span className="font-display text-5xl" style={{ color: 'var(--cream)', lineHeight: 1 }}>ICHI</span>
              <br />
              <span className="font-display text-3xl" style={{ color: 'var(--red)', lineHeight: 1 }}>RAMEN</span>
            </div>
            <p className="font-typewriter text-sm leading-relaxed" style={{ color: 'rgba(242,234,216,0.55)' }}>
              Un voyage culinaire japonais<br />au cœur de Paris depuis 2018.
            </p>
            <div className="mt-4">
              <span className="font-jp text-lg" style={{ color: 'rgba(242,234,216,0.2)', letterSpacing: '0.3em' }}>一ラーメン</span>
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-base tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>
              Saint-Denis
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--red)' }} />
                <span className="font-typewriter text-sm" style={{ color: 'rgba(242,234,216,0.7)' }}>
                  135 Rue Saint-Denis<br />75002 Paris
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--red)' }} />
                <span className="font-typewriter text-sm" style={{ color: 'rgba(242,234,216,0.7)' }}>
                  Lun – Dim : 12h – 22h30
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/restaurant-saint-denis" className="font-oswald text-xs tracking-widest uppercase no-underline" style={{ color: 'var(--red)' }}>
                Voir la page →
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-base tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>
              Aboukir
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--red)' }} />
                <span className="font-typewriter text-sm" style={{ color: 'rgba(242,234,216,0.7)' }}>
                  52 Rue d'Aboukir<br />75002 Paris
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--red)' }} />
                <span className="font-typewriter text-sm" style={{ color: 'rgba(242,234,216,0.7)' }}>
                  Lun – Dim : 12h – 22h30
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/restaurant-aboukir" className="font-oswald text-xs tracking-widest uppercase no-underline" style={{ color: 'var(--red)' }}>
                Voir la page →
              </Link>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(192,25,29,0.25)' }}
        >
          <p className="font-typewriter text-xs" style={{ color: 'rgba(242,234,216,0.3)' }}>
            © {new Date().getFullYear()} ICHI RAMEN — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ichiramen.paris/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 no-underline transition-opacity hover:opacity-70"
              style={{ color: 'rgba(242,234,216,0.5)' }}
            >
              <Instagram size={16} />
              <span className="font-oswald text-xs tracking-wider">@ichiramen.paris</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
