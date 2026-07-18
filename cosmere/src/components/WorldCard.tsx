interface Props {
  name: string;
  teaser: string;
  accent?: string;
  onExplore?: () => void;
}

export default function WorldCard({ name, teaser, accent, onExplore }: Props) {
  return (
    <div className="world-card" style={accent ? ({ '--accent': accent } as React.CSSProperties) : undefined}>
      <h3 className="world-card__name">{name}</h3>
      <p className="world-card__teaser">{teaser}</p>
      {onExplore && (
        <button type="button" className="btn btn-ghost world-card__cta" onClick={onExplore}>
          Explorar
        </button>
      )}
    </div>
  );
}
