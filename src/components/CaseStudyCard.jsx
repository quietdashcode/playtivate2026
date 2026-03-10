import { Link } from 'react-router-dom';

function CaseStudyCard({ caseStudy }) {
  return (
    <article className="case-study-card">
      {caseStudy.image ? (
        <Link className="case-study-media" to={`/case-studies/${caseStudy.slug}`}>
          <img alt={caseStudy.title} loading="lazy" src={caseStudy.image} />
        </Link>
      ) : null}
      <div className="pill-row">
        <span className="pill">{caseStudy.category}</span>
        <span className="pill muted">{caseStudy.sector}</span>
      </div>
      <h3>{caseStudy.title}</h3>
      <p className="meta">{caseStudy.client}</p>
      <p>{caseStudy.summary}</p>
      <Link className="text-link" to={`/case-studies/${caseStudy.slug}`}>
        Read case study
      </Link>
    </article>
  );
}

export default CaseStudyCard;