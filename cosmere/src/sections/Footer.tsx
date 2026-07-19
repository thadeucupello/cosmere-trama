import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/content';
import { navItemTo } from '../utils/navItemTo';
import { socialLinks } from '../data/social';
import TramaLogo from '../components/TramaLogo';

const footerNavIds = ['hero', 'caminho', 'arquivos', 'jornada', 'biblioteca'];

export default function Footer() {
  const location = useLocation();
  const footerItems = navItems.filter((item) => footerNavIds.includes(item.id));

  return (
    <footer className="site-footer site-footer--compact">
      <div className="container site-footer__compact-main">
        <div className="site-footer__brand">
          <TramaLogo size="large" />
          <p>Editora Trama, o guia oficial de Brandon Sanderson no Brasil.</p>
        </div>

        <nav aria-label="Links de navegação do rodapé">
          <p className="site-footer__column-title">Explore</p>
          <ul className="site-footer__links site-footer__links--inline">
            {footerItems.map((item) => (
              <li key={item.id}>
                <Link to={navItemTo(item, location.pathname)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container site-footer__compact-bottom">
        {socialLinks.length > 0 && (
          <div className="site-footer__social site-footer__social--inline" aria-label="Redes sociais da Trama">
            {socialLinks.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
                {social.label.replace('Trama no ', '')}
              </a>
            ))}
          </div>
        )}
        <p className="site-footer__copyright">© {new Date().getFullYear()} Editora Trama. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
