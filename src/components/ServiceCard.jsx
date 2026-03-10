import { Link } from 'react-router-dom';

const SERVICE_ICONS = {
  'vr-ar': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>
      <circle cx="8" cy="12" r="2"/>
      <circle cx="16" cy="12" r="2"/>
      <path d="M10 12h4"/>
    </svg>
  ),
  'e-learning': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  'serious-games': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <line x1="6" y1="12" x2="10" y2="12"/>
      <line x1="8" y1="10" x2="8" y2="14"/>
      <circle cx="15" cy="13" r="1"/>
      <circle cx="18" cy="11" r="1"/>
    </svg>
  ),
};

function ServiceCard({ service }) {
  return (
    <article className={`service-card service-card--${service.slug}`}>
      <div className="service-card-icon">{SERVICE_ICONS[service.slug]}</div>
      <h3>{service.title}</h3>
      <p className="service-tagline">{service.tagline}</p>
      <ul className="service-offerings" aria-label="Key offerings">
        {service.offerings.slice(0, 3).map((offering) => (
          <li key={offering}>{offering}</li>
        ))}
      </ul>
      <Link className="text-link" to={`/services/${service.slug}`}>
        Explore service
      </Link>
    </article>
  );
}

export default ServiceCard;