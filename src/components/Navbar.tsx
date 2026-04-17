import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/restaurants', label: 'Restaurants' },
  { to: '/menu-saint-denis', label: 'Menu Saint-Denis' },
  { to: '/menu-aboukir', label: 'Menu Aboukir' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header style={{ backgroundColor: 'var(--black)', borderBottom: '3px solid var(--red)' }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-2xl tracking-widest"
              style={{ color: 'var(--cream)', lineHeight: 1 }}
            >
              ICHI
            </span>
            <span
              className="font-display text-lg tracking-widest"
              style={{ color: 'var(--red)', lineHeight: 1 }}
            >
              RAMEN
            </span>
          </div>
          <div
            className="font-jp text-xs hidden sm:block"
            style={{ color: 'rgba(242,234,216,0.35)', letterSpacing: '0.2em', writingMode: 'vertical-rl' }}
          >
            一ラーメン
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-oswald text-sm tracking-widest uppercase no-underline transition-colors duration-150"
              style={{
                color: location.pathname === l.to ? 'var(--red)' : 'rgba(242,234,216,0.75)',
                fontWeight: location.pathname === l.to ? 700 : 400,
                borderBottom: location.pathname === l.to ? '2px solid var(--red)' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          style={{ color: 'var(--cream)' }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: 'var(--black)', borderColor: 'rgba(192,25,29,0.4)' }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-oswald text-sm tracking-widest uppercase no-underline border-b"
              style={{
                color: location.pathname === l.to ? 'var(--red)' : 'rgba(242,234,216,0.8)',
                borderColor: 'rgba(255,255,255,0.06)',
                fontWeight: location.pathname === l.to ? 700 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
