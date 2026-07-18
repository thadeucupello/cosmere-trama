import logoUrl from '../assets/logos/trama-logo-white.png';

interface Props {
  size?: 'small' | 'large';
}

export default function TramaLogo({ size = 'small' }: Props) {
  return <img src={logoUrl} alt="Editora Trama" className={`trama-logo trama-logo--${size}`} />;
}
