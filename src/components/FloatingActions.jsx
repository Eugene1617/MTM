import { useEffect, useState } from 'react';
import { site, faqs } from '../data/site';

const waLink = (text) => `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(text)}`;

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Close the FAQ panel with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div className="float-stack">
        <button
          className="float-btn btn-faq"
          aria-label={open ? 'Close FAQ' : 'Open FAQ'}
          aria-expanded={open}
          aria-controls="faq-panel"
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l1.6-3.9A8.5 8.5 0 1 1 21 11.5z" />
            <path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.5-2 1.7-2.2 3" />
            <circle cx="12" cy="16.2" r="0.6" fill="currentColor" stroke="none" />
          </svg>
        </button>

        <a
          className="float-btn btn-whatsapp"
          href={waLink("Hi, I'd like to ask about printing")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 6.8 12.8l-.2.3.6 2.3-2.4-.7-.3.2a8.2 8.2 0 1 1-4.5-15zM8.7 7.4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.8 4.3 3.8 2.1.9 2.5.7 3 .6.4 0 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3l-2-1c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.8-2.1-1.5-.6-.6-1-1.3-1.2-1.7-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.4.1-.6l-.9-2.2c-.1-.3-.3-.3-.5-.3h-.5z" />
          </svg>
        </a>
      </div>

      <div
        id="faq-panel"
        className={`faq-panel${open ? ' open' : ''}`}
        role="dialog"
        aria-label="Frequently asked questions"
        aria-hidden={!open}
      >
        <div className="faq-head">
          <div>
            <h4>Quick answers</h4>
            <span>Tap a question to expand</span>
          </div>
          <button className="faq-close" aria-label="Close FAQ" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>

        <div className="faq-body">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="chev" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-foot">
          <a href={waLink('Hi, I have a question')} target="_blank" rel="noopener noreferrer">
            Still stuck? Ask us on WhatsApp →
          </a>
        </div>
      </div>
    </>
  );
}
