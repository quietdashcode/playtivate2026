import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import PageHero from '../components/PageHero';
import {
  caseStudies,
  getCaseStudyBySlug,
} from '../content/siteContent';
import NotFoundPage from './NotFoundPage';

function CaseStudyDetailPage() {
  const { caseStudySlug } = useParams();
  const caseStudy = getCaseStudyBySlug(caseStudySlug);

  if (!caseStudy) {
    return <NotFoundPage />;
  }

  const relatedCaseStudies = caseStudies
    .filter(
      (item) =>
        item.slug !== caseStudy.slug && item.serviceSlug === caseStudy.serviceSlug,
    )
    .slice(0, 2);
  const gallery = caseStudy.gallery ?? [];
  const detailVisualClass = [
    'detail-visual-frame',
    caseStudy.slug === 'ops-battleforce-2' ? 'detail-visual-frame--wide' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <PageHero
        eyebrow={`${caseStudy.category} / ${caseStudy.sector}`}
        title={caseStudy.title}
        body={caseStudy.summary}
      />

      {caseStudy.image ? (
        <section className="content-section detail-visual-section">
          <div className={detailVisualClass}>
            <img alt={caseStudy.title} src={caseStudy.image} />
          </div>
        </section>
      ) : null}

      <section className="content-section story-grid">
        <article className="story-card">
          <p className="eyebrow">Client</p>
          <h2>{caseStudy.client}</h2>
          <p>{caseStudy.platforms}</p>
        </article>
        <article className="story-card">
          <p className="eyebrow">Challenge</p>
          <p>{caseStudy.challenge}</p>
        </article>
        <article className="story-card full-width">
          <p className="eyebrow">Solution</p>
          <p>{caseStudy.solution}</p>
        </article>
        <article className="story-card">
          <p className="eyebrow">Experience Highlights</p>
          <ul className="feature-list compact">
            {caseStudy.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
        <article className="story-card">
          <p className="eyebrow">Outcome</p>
          <p>{caseStudy.outcome}</p>
        </article>
      </section>

      {gallery.length ? (
        <section className="content-section accent-surface">
          <div className="section-heading">
            <p className="eyebrow">Project Gallery</p>
          </div>
          <div className="case-study-gallery">
            {gallery.map((image, index) => (
              <figure className="gallery-card" key={image}>
                <img alt={`${caseStudy.title} screenshot ${index + 1}`} loading="lazy" src={image} />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {relatedCaseStudies.length ? (
        <section className="content-section accent-surface">
          <div className="section-heading">
            <p className="eyebrow">Related Projects</p>
            <h2>More work in this area</h2>
          </div>
          <div className="related-links">
            {relatedCaseStudies.map((item) => (
              <Link className="related-link" key={item.slug} to={`/case-studies/${item.slug}`}>
                <span>{item.title}</span>
                <small>{item.category}</small>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <CallToAction
        eyebrow="Similar Opportunity"
        title="Need a digital experience with the same level of clarity and engagement?"
        body="We can help scope the right approach and shape the experience around your audience, content, and delivery context."
      />
    </>
  );
}

export default CaseStudyDetailPage;