import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Props {
  to?: string;
  label?: string;
}

export default function BackToMapLink({ to = '/#cosmere', label = 'Voltar ao mapa da Cosmere' }: Props) {
  return (
    <Link to={to} className="back-to-map">
      <ArrowLeft size={16} aria-hidden="true" />
      {label}
    </Link>
  );
}
