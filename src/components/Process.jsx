import { steps } from '../data/site';
import { Reveal, RevealWords } from '../hooks/useReveal';
import ImageCard from './ImageCard';

export default function Process() {
  return (
    <section id="process" className="alt">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">How it works</span>
          <RevealWords text="From file to finished copies" />
        </Reveal>

        {steps.map((step, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={step.title} className={`process-row${reversed ? ' rev' : ''}`}>
              <Reveal variant={reversed ? 'right' : 'left'} className="process-media">
                <ImageCard slot={`step-${i + 1}`} />
              </Reveal>
              <Reveal variant={reversed ? 'left' : 'right'} className="text-block">
                <p className="step">Step {i + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
