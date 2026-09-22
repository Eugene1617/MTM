import { useEffect, useState } from 'react';
import { site, navLinks } from '../data/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''} aria-label="Main">
      <a className="logo" href="#top">
        <span className="mark">{site.mark}</span> {site.suffix}
      </a>
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a className="nav-cta" href="#contact">
        Order a print
      </a>
    </nav>
  );
}
