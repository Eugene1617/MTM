import { useState } from 'react';
import { site } from '../data/site';
import { Reveal } from '../hooks/useReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Request form submitted:', form);
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact-panel">
          <div>
            <h2>Need something printed today?</h2>
            <p>Send us your file and a few details — we'll confirm price and pickup time before you head over.</p>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your name" required value={form.name} onChange={update('name')} aria-label="Your name" />
              <input type="email" placeholder="Email address" required value={form.email} onChange={update('email')} aria-label="Email address" />
              <textarea rows="3" placeholder="What do you need copied or printed?" value={form.message} onChange={update('message')} aria-label="What do you need copied or printed?" />
              <button type="submit" disabled={sent}>
                {sent ? "Sent — we'll be in touch" : 'Send request'}
              </button>
            </form>
          </div>

          <div className="info-list">
            <div className="info-item">
              <p className="label">Visit the shop</p>
              <p className="value">{site.address}</p>
            </div>
            <div className="info-item">
              <p className="label">Call or WhatsApp</p>
              <p className="value"><a href={`tel:${site.phone.tel}`}>{site.phone.display}</a></p>
            </div>
            <div className="info-item">
              <p className="label">Email</p>
              <p className="value"><a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
            <div className="info-item">
              <p className="label">Hours</p>
              <p className="value">{site.hours}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
