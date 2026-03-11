import { useEffect, useState } from 'react';
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
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);

  if (!caseStudy) {
    return <NotFoundPage />;
  }

  const gallery = caseStudy.gallery ?? [];
  const selectedGalleryImage = selectedGalleryIndex !== null ? gallery[selectedGalleryIndex] : null;
  const selectedGalleryAlt = selectedGalleryIndex !== null
    ? `${caseStudy.title} screenshot ${selectedGalleryIndex + 1}`
    : '';

  const showPreviousImage = () => {
    setSelectedGalleryIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex - 1 + gallery.length) % gallery.length;
    });
  };

  const showNextImage = () => {
    setSelectedGalleryIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex + 1) % gallery.length;
    });
  };

  useEffect(() => {
    if (selectedGalleryIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedGalleryIndex(null);
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGalleryIndex, gallery.length]);

  const relatedCaseStudies = caseStudies
    .filter(
      (item) =>
        item.slug !== caseStudy.slug && item.serviceSlug === caseStudy.serviceSlug,
    )
    .slice(0, 2);
  const detailVisualClass = [
    'detail-visual-frame',
    caseStudy.slug === 'ops-battleforce-2' ? 'detail-visual-frame--wide' : '',
    caseStudy.slug === 'ops-battleforce-2' ? 'detail-visual-frame--center-focus' : '',
    caseStudy.slug === 'ar-heart' ? 'detail-visual-frame--bottom-focus' : '',
    caseStudy.slug === 'captains-of-lives-super-challenge' ? 'detail-visual-frame--bottom-focus' : '',
    caseStudy.slug === 'one-force-reloaded' ? 'detail-visual-frame--bottom-focus' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <PageHero
        className="page-hero--single-line"
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
                <button
                  aria-label={`Open ${caseStudy.title} screenshot ${index + 1}`}
                  className="gallery-button"
                  onClick={() => setSelectedGalleryIndex(index)}
                  type="button"
                >
                  <img alt={`${caseStudy.title} screenshot ${index + 1}`} loading="lazy" src={image} />
                </button>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {selectedGalleryImage ? (
        <div
          aria-modal="true"
          className="lightbox"
          onClick={() => setSelectedGalleryIndex(null)}
          role="dialog"
        >
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            {gallery.length > 1 ? (
              <button
                aria-label="Show previous image"
                className="lightbox-nav lightbox-nav--previous"
                onClick={showPreviousImage}
                type="button"
              >
                Prev
              </button>
            ) : null}
            <button
              aria-label="Close image viewer"
              className="lightbox-close"
              onClick={() => setSelectedGalleryIndex(null)}
              type="button"
            >
              Close
            </button>
            <img alt={selectedGalleryAlt} className="lightbox-image" src={selectedGalleryImage} />
            {gallery.length > 1 ? (
              <button
                aria-label="Show next image"
                className="lightbox-nav lightbox-nav--next"
                onClick={showNextImage}
                type="button"
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      {relatedCaseStudies.length ? (
        <section className="content-section accent-surface">
          <div className="section-heading">
            <p className="eyebrow">Related Projects</p>
            <h2 className="section-title-single-line">More work in this area</h2>
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