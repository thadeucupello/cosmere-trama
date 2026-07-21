import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta(
    'Página não encontrada | Descubra a Cosmere',
    'Esta página não foi encontrada. Volte ao início para continuar explorando a Cosmere.'
  );

  return (
    <section className="section archive-not-found" aria-labelledby="not-found-title">
      <div className="container">
        <span aria-hidden="true">◇</span>
        <p className="eyebrow">Caminho desconhecido</p>
        <h1 id="not-found-title">Este mundo ainda não foi encontrado.</h1>
        <p className="section-sub">Volte ao mapa e escolha uma nova rota pela Cosmere.</p>
        <Link className="btn btn-primary" to="/">Voltar ao início</Link>
      </div>
    </section>
  );
}
