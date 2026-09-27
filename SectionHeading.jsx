export default function SectionHeading({ kicker, title, accent, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {kicker && (
        <p className="section-heading__kicker" style={accent ? { color: accent } : undefined}>
          {kicker}
        </p>
      )}
      <h2 className="section-heading__title">{title}</h2>
    </div>
  );
}
