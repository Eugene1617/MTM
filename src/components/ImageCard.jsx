import { getImage } from '../lib/images';
import { imageSlots } from '../data/site';


export default function ImageCard({ slot, fill = false, className = '' }) {
  const config = imageSlots[slot] ?? { label: slot, alt: '', hint: '' };
  const src = getImage(slot);
  const classes = ['image-card', fill ? 'fill' : '', className].filter(Boolean).join(' ');

  return (
    <figure className={classes}>
      {src ? (
        <img src={src} alt={config.alt} loading="lazy" decoding="async" />
      ) : (
        <div
          className="image-slot"
          role="img"
          aria-label={`Image placeholder: ${config.label}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="9" cy="10" r="1.6" />
            <path d="M21 16l-5-5-8 8" />
          </svg>
          <span className="slot-label">{config.label}</span>
          <span className="slot-file">src/assets/images/{slot}.jpg</span>
          {config.hint && <span className="slot-hint">{config.hint}</span>}
        </div>
      )}
    </figure>
  );
}
