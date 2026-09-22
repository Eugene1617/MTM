import { site, location } from '../data/site';
import { Reveal } from '../hooks/useReveal';

export default function FindUs() {
  return (
    <section id="map">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Find us</span>
          <h2>{location.heading}</h2>
          <p>{location.intro}</p>
        </Reveal>

        <Reveal className="map-panel">
          <div className="map-visual">
            <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple map showing the shop location">
              <rect width="400" height="320" fill="var(--paper-2)" />
              <path d="M0 80 H400" stroke="var(--line)" strokeWidth="10" />
              <path d="M0 220 H400" stroke="var(--line)" strokeWidth="14" />
              <path d="M150 0 V320" stroke="var(--line)" strokeWidth="10" />
              <path d="M290 0 V320" stroke="var(--line)" strokeWidth="8" />
              <rect x="170" y="95" width="80" height="60" fill="var(--card-bg)" stroke="var(--ink-soft)" />
              <rect x="40" y="230" width="70" height="50" fill="var(--card-bg)" stroke="var(--ink-soft)" />
              <rect x="300" y="30" width="70" height="40" fill="var(--card-bg)" stroke="var(--ink-soft)" />
              <g className="pin-pulse">
                <circle cx="210" cy="130" r="9" fill="var(--accent)" />
              </g>
              <path d="M210 108 c-14 0 -24 10 -24 24 c0 18 24 40 24 40 s24 -22 24 -40 c0 -14 -10 -24 -24 -24z" fill="var(--accent)" />
              <circle cx="210" cy="132" r="8" fill="var(--paper)" />
            </svg>
          </div>

          <div className="map-info">
            <h3>{site.name}</h3>
            <p className="addr">{site.address}</p>
            <p>{location.parking}</p>
            <a className="map-btn" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
