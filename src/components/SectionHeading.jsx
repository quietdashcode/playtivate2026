function SectionHeading({ eyebrow, title, body, className = '' }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export default SectionHeading;