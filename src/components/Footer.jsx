import { site } from '../data/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="mark">{site.mark}</span> {site.suffix}
            </div>
            <p>Photocopying, printing, and stationery for students, offices, and everyday errands.</p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Photocopying</a></li>
                <li><a href="#services">Assignment printing</a></li>
                <li><a href="#services">Binding &amp; lamination</a></li>
                <li><a href="#services">Stationery</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="#map">Find us</a></li>
                <li><a href="#contact">Order a print</a></li>
                <li><a href={`tel:${site.phone.tel}`}>{site.phone.display}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {site.year} {site.name}. All rights reserved.</p>
          <p>Behind Chenda Residence, Mzuzu, Malawi</p>
        </div>
      </div>
    </footer>
  );
}
