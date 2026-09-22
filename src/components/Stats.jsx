import { stats } from '../data/site';
import { Reveal } from '../hooks/useReveal';

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="wrap">
        <Reveal className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
