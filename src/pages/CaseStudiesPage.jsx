import { useMemo, useState } from 'react';
import CallToAction from '../components/CallToAction';
import CaseStudyCard from '../components/CaseStudyCard';
import PageHero from '../components/PageHero';
import { caseStudies } from '../content/siteContent';

const filters = ['All', 'VR/AR', 'E-Learning', 'Serious Games', 'Education', 'Healthcare', 'Government'];

function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCaseStudies = useMemo(() => {
    if (activeFilter === 'All') {
      return caseStudies;
    }

    return caseStudies.filter(
      (caseStudy) =>
        caseStudy.category === activeFilter || caseStudy.sector === activeFilter,
    );
  }, [activeFilter]);

  return (
    <>
      <PageHero
        className="page-hero--wide-title"
        // eyebrow="Case Studies"
        title="Selected work across immersive learning, digital courseware, and serious games."
        body="A curated selection of Playtivate projects across healthcare, education, government, and enterprise, showing how interactive experiences can support learning, engagement, and real-world outcomes."
        image="/images/heroes/case-studies.jpg"
      />

      <section className="content-section">
        <div className="filter-row" role="tablist" aria-label="Case study filters">
          {filters.map((filter) => (
            <button
              className={filter === activeFilter ? 'filter-chip active' : 'filter-chip'}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="card-grid three-up">
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      <CallToAction
        eyebrow="Your Project"
        title="Have a similar challenge to solve?"
        body="Playtivate can help you translate learning, training, or engagement requirements into a format that audiences will actively use."
        buttonLabel="Speak With Playtivate"
      />
    </>
  );
}

export default CaseStudiesPage;