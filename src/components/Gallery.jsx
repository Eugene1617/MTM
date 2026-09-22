import { Reveal } from '../hooks/useReveal';
import ImageCard from './ImageCard';

// Four image cards in an alternating wide / narrow layout.
const slots = ['Screenshot_2026-09-22-12-51-23-707_com.google.android.apps.maps.jpg', 'gallery-2', 'gallery-3', 'gallery-4'];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Gallery</span>
          <h2>A look around the shop</h2>
          <p>The counter, the machines, and the finished work.</p>
        </Reveal>

        <div className="gallery-grid">
          {slots.map((slot, i) => (
            <Reveal key={slot} className={`gallery-item g${i + 1}`}>
              <ImageCard slot={slot} fill />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
