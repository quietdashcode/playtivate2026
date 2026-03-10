import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import CaseStudyCard from '../components/CaseStudyCard';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import {
  getCaseStudiesByService,
  getServiceBySlug,
} from '../content/siteContent';
import NotFoundPage from './NotFoundPage';

function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <NotFoundPage />;
  }

  const caseStudies = getCaseStudiesByService(service.slug);
  const referenceTitle = service.slug === 'serious-games'
    ? 'Reference work in Serious Games'
    : `Reference work in ${service.shortLabel}`;

  return (
    <>
      <PageHero
        className="page-hero--brighter-image"
        eyebrow={service.shortLabel}
        title={service.tagline}
        body={service.summary}
        image={service.heroImage}
      />

      <section className="content-section split-layout">
        <div>
          <SectionHeading
            eyebrow="What This Solves"
            title={`Where ${service.shortLabel} becomes commercially useful`}
          />
          <ul className="feature-list">
            {service.problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading eyebrow="What We Build" title={service.title} />
          <ul className="feature-list compact">
            {service.offerings.map((offering) => (
              <li key={offering}>{offering}</li>
            ))}
          </ul>
          <div className="detail-panel service-detail-panel">
            <p className="eyebrow">Platforms And Delivery</p>
            <p>{service.platforms}</p>
          </div>
        </div>
      </section>

      <section className="content-section accent-surface">
        <SectionHeading
          eyebrow="Selected Case Studies"
          title={referenceTitle}
          body="These projects show how Playtivate applies the service in real learning, training, and engagement contexts."
        />
        <div className="card-grid three-up">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
        <div className="inline-link-row">
          <Link className="text-link" to="/case-studies">
            View all case studies
          </Link>
        </div>
      </section>

      <CallToAction
        eyebrow="Next Step"
        title={service.cta}
        body="We can help shape the concept, recommend the right format, and build the product end to end."
        buttonLabel={service.cta}
      />
    </>
  );
}

export default ServiceDetailPage;