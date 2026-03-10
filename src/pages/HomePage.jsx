import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import CaseStudyCard from '../components/CaseStudyCard';
import ClientStrip from '../components/ClientStrip';
import ProcessFlowDiagram from '../components/ProcessFlowDiagram';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import StatsBand from '../components/StatsBand';
import {
  clients,
  featuredCaseStudies,
  sectors,
  services,
  stats,
} from '../content/siteContent';
import { assetPath } from '../utils/assetPath';

const SECTOR_ICONS = {
  Education: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Healthcare: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v8M8 12h8"/>
    </svg>
  ),
  Government: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 22h18M3 10h18M5 22V10M9 22V10M15 22V10M19 22V10"/>
      <path d="M12 2L3 10h18L12 2z"/>
    </svg>
  ),
  Enterprise: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
};

function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-media" aria-hidden="true">
          <img
            alt=""
            src={assetPath('/images/home/playtivate-home-hero.jpg')}
          />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-content">
          {/* <p className="eyebrow">Playtivate</p> */}
          <h1>Immersive experiences that move people to learn, perform, and participate.</h1>
          <p className="hero-text">
            Playtivate designs VR/AR experiences, e-learning products, and serious games
            that turn complex ideas into clear, engaging digital journeys for education,
            healthcare, government, and enterprise teams.
          </p>
          <div className="button-row">
            <Link className="button primary" to="/contact">
              Discuss Your Project
            </Link>
            <Link className="button secondary" to="/case-studies">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <ClientStrip clients={clients} />

      <section className="content-section services-band">
        <SectionHeading
          eyebrow="Services"
          title="Digital experiences with a real-world purpose"
          body="We combine instructional thinking, interaction design, and immersive technology to deliver products people can understand and use."
        />
        <div className="card-grid three-up">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="content-section accent-surface">
        <SectionHeading
          eyebrow="Selected Work"
          title="Proof across healthcare, education, and public sector engagement"
          body="A curated set of case studies that show how Playtivate turns learning and engagement goals into digital experiences that people actively use."
        />
        <div className="card-grid three-up">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Why Playtivate"
          title="Built on experience. Focused on outcomes."
          body="With more than two decades of experience, Playtivate brings together game design, learning design, and immersive development to create experiences that help people understand, practice, remember, and engage."
        />
        <StatsBand stats={stats} />
      </section>

      <section className="content-section process-layout">
        <SectionHeading
          eyebrow="How We Work"
          title="From concept definition to launch support"
          body="We work closely with clients from concept to launch, aligning design, content, and technology around a clear learning or engagement goal."
        />
        <div className="process-flow-wrap">
          <ProcessFlowDiagram />
        </div>
      </section>

      <section className="content-section sector-band">
        <SectionHeading
          eyebrow="Where We Work"
          title="Experience across sectors where clarity and participation matter"
          body="Our work spans education, healthcare, government, and enterprise environments where digital experiences need to deliver more than surface-level novelty."
        />
        <div className="sector-list">
          {sectors.map((sector) => (
            <div className="sector-row" key={sector.name}>
              <div className="sector-row-icon">{SECTOR_ICONS[sector.name]}</div>
              <div className="sector-row-body">
                <h3>{sector.name}</h3>
                <div className="sector-row-rule" />
                <p>{sector.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToAction
        eyebrow="Start A Project"
        title="Planning a VR/AR experience, digital learning product, or serious game?"
        body="We can help define the concept, shape the experience, and build it end to end."
      />
    </>
  );
}

export default HomePage;