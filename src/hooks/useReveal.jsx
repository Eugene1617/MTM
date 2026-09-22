import { Fragment, useEffect, useRef, useState } from 'react';

// Adds the "in" state once the element scrolls into view (runs once).
export function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
}

// <Reveal variant="up|left|right"> — wraps any block with a scroll-in animation.
export function Reveal({ as: Tag = 'div', variant = 'up', className = '', children, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal-${variant} ${inView ? 'in' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Splits text into words that fade in one after another when scrolled into view.
export function RevealWords({ as: Tag = 'h2', text, className = '' }) {
  const [ref, inView] = useReveal();
  return (
    <Tag ref={ref} className={`reveal-word ${inView ? 'in' : ''} ${className}`.trim()}>
      {text.split(' ').map((word, i) => (
        <Fragment key={i}>
          <span style={{ transitionDelay: `${i * 0.06}s` }}>{word}</span>{' '}
        </Fragment>
      ))}
    </Tag>
  );
}
