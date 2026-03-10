import { Link } from 'react-router-dom';

function CallToAction({ eyebrow, title, body, buttonLabel = 'Talk to Us' }) {
  return (
    <section className="cta-panel">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      <p>{body}</p>
      <Link className="button primary" to="/contact">
        {buttonLabel}
      </Link>
    </section>
  );
}

export default CallToAction;