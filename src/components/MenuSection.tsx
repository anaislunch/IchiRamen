import { MenuCategory } from '../types';

interface Props {
  categories: MenuCategory[];
}

const TAG_COLORS: Record<string, string> = {
  signature: 'var(--red)',
  spécialité: '#b86a00',
  piquant: '#b86a00',
};

export default function MenuSection({ categories }: Props) {
  return (
    <div className="space-y-14">
      {categories.map((cat) => (
        <div key={cat.id}>
          <div className="mb-6">
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: 'var(--black)' }}>
              {cat.title}
            </h2>
            {cat.subtitle && (
              <p className="font-oswald text-sm tracking-widest uppercase mt-1" style={{ color: 'rgba(14,12,10,0.45)' }}>
                {cat.subtitle}
              </p>
            )}
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--red)', marginTop: '10px' }} />
          </div>

          <div className="space-y-0">
            {cat.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between gap-4 py-4"
                style={{
                  borderBottom: idx < cat.items.length - 1
                    ? '1px solid rgba(14,12,10,0.12)'
                    : '2px solid var(--black)',
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-oswald font-semibold text-base tracking-wide" style={{ color: 'var(--black)' }}>
                      {item.name}
                    </span>
                    {item.tag && (
                      <span
                        className="font-oswald text-xs tracking-widest uppercase px-2 py-0.5"
                        style={{
                          backgroundColor: TAG_COLORS[item.tag] || 'var(--red)',
                          color: 'var(--cream)',
                          fontSize: '10px',
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="font-typewriter text-sm mt-1 leading-snug" style={{ color: 'rgba(14,12,10,0.55)' }}>
                      {item.description}
                    </p>
                  )}
                </div>
                <div
                  className="font-display text-xl flex-shrink-0 ml-2"
                  style={{ color: 'var(--red)', letterSpacing: '0.05em' }}
                >
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
