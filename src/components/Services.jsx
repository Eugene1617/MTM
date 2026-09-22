import { services } from '../data/site';
import { Reveal } from '../hooks/useReveal';
import ImageCard from './ImageCard';

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Services</span>
          <h2>Everything on one counter</h2>
          <p>Bring a file, a flash disk, or a stack of papers — most jobs are ready while you wait.</p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} className="service-card">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Reveal>
          ))}

          {/* Sixth cell of the grid: image card */}
          <Reveal className="service-media">
            <ImageCard slot="services" fill />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
