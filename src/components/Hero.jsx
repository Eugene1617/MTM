import { site, hero } from '../data/site';
import ImageCard from './ImageCard';

export default function Hero() {
  const words = hero.title.split(' ');

  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-tag">
            <span className="dot" /> {site.tagline}
          </p>
          <h1>
            {words.map((word, i) => (
              <span key={i}>
                <span className="word" style={{ animationDelay: `${0.15 + i * 0.09}s` }}>
                  {word}
                </span>{' '}
              </span>
            ))}
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">
              Order a print
            </a>
            <a className="btn-ghost" href="#services">
              See all services
            </a>
          </div>
        </div>

        <div className="hero-media">
          <ImageCard slot="hero" className="hero-image" />
        </div>
      </div>
    </header>
  );
}
