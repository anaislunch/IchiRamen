import { Review } from '../types';

interface Props {
  review: Review;
  rotateClass?: string;
}

export default function ReviewCard({ review, rotateClass = '' }: Props) {
  return (
    <div
      className={`manga-panel-light texture-dark p-6 ${rotateClass}`}
      style={{ position: 'relative' }}
    >
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} style={{ color: 'var(--red)', fontSize: '14px' }}>★</span>
        ))}
        {Array.from({ length: 5 - review.rating }).map((_, i) => (
          <span key={i} style={{ color: 'rgba(242,234,216,0.2)', fontSize: '14px' }}>★</span>
        ))}
      </div>
      <p
        className="font-typewriter text-sm leading-relaxed mb-4"
        style={{ color: 'rgba(242,234,216,0.85)' }}
      >
        "{review.text}"
      </p>
      <p
        className="font-oswald text-xs tracking-widest uppercase"
        style={{ color: 'rgba(192,25,29,0.8)' }}
      >
        {review.author}
      </p>
      <div
        className="absolute bottom-3 right-4 font-jp text-5xl pointer-events-none select-none"
        style={{ color: 'rgba(192,25,29,0.06)', lineHeight: 1 }}
      >
        評
      </div>
    </div>
  );
}
