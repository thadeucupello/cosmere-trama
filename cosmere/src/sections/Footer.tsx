import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/content';
import { navItemTo } from '../utils/navItemTo';
import { socialLinks } from '../data/social';
import TramaLogo from '../components/TramaLogo';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="site-footer">
      <div className="site-footer__ending">
        <span aria-hidden="true">✦</span>
        <p>A jornada não termina na última página.</p>
        <strong>Outros mundos ainda esperam por você.</strong>
      </div>

      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <TramaLogo size="large" />
          <p>Editora Trama, o guia oficial de Brandon Sanderson no Brasil.</p>
        </div>

        <nav aria-label="Links de navegação do rodapé">
          <p className="site-footer__column-title">Explore</p>
          <ul className="site-footer__links">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={navItemTo(item, location.pathname)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {socialLinks.length > 0 && (
          <div className="site-footer__social" aria-label="Redes sociais da Trama">
            <p className="site-footer__column-title">Acompanhe a Trama</p>
            {socialLinks.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
                {social.label.replace('Trama no ', '')}
              </a>
            ))}
          </div>
        )}
      </div>

      <p className="site-footer__copyright">© {new Date().getFullYear()} Editora Trama. Todos os direitos reservados.</p>
    </footer>
  );
}
