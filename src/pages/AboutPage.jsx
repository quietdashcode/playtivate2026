import CallToAction from '../components/CallToAction';
import ClientStrip from '../components/ClientStrip';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import StatsBand from '../components/StatsBand';
import { clients, stats } from '../content/siteContent';
import { assetPath } from '../utils/assetPath';

const strengths = [
  'Long-term experience in digital interactivity and applied game design.',
  'Work across education, healthcare, government, and enterprise.',
  'End-to-end capability from concept and content design to production and deployment.',
];

const awards = [
  {
    title: 'Commendation Award',
    event: 'Ministry of Home Affairs 3i Award',
    year: '2014',
    project: 'MHA The 5 Days game',
    logos: [{ src: '/images/awards/mha.png', alt: 'Ministry of Home Affairs' }],
  },
  {
    title: 'Distinguished Award',
    event: 'International Convention on Quality Control Circles',
    year: '2011',
    location: 'Japan',
    project: 'NEA MACE Genesis game',
    logos: [{ src: '/images/clients/nea.png', alt: 'National Environment Agency' }],
  },
  {
    title: 'Silver Award',
    event: 'PS21 ExCEL Convention',
    year: '2010',
    project: 'NEA MACE Genesis game',
    logos: [{ src: '/images/clients/nea.png', alt: 'National Environment Agency' }],
  },
  {
    title: 'Finalist',
    event: 'Global Mobile Content Awards',
    year: '2007',
    location: 'Korea',
  },
  {
    title: '2nd Prize',
    event: 'SingTel Nokia Multiplayer Game Development Contest',
    year: '2007',
    logos: [
      { src: '/images/clients/singtel.svg', alt: 'Singtel' },
      { src: '/images/awards/nokia.png', alt: 'Nokia' },
    ],
  },
  {
    title: 'Winner',
    event: 'Singapore National Infocomm Awards',
    year: '2006',
    note: 'Most Innovative Product',
    project: 'Cross Platform Game Engine',
    logos: [{ src: '/images/awards/imda.png', alt: 'Infocomm award issuer mark' }],
  },
  {
    title: 'Winner',
    event: 'Nokia Flash Hunt Contest',
    year: '2005',
    logos: [{ src: '/images/awards/nokia.png', alt: 'Nokia' }],
  },
  {
    title: 'Winner',
    event: 'Nokia Forum Pro Award',
    year: '2004',
    note: 'Most Successful Game Company in South East Asia Pacific',
    logos: [{ src: '/images/awards/nokia.png', alt: 'Nokia' }],
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        className="page-hero--wide-title"
        // eyebrow="About"
        title="An interactive studio focused on learning, engagement, and positive outcomes."
        body="Since 1997, Playtivate has designed and developed games and interactive experiences for organizations that need people to learn, understand, participate, and act."
        image="/images/heroes/about.jpg"
      />

      <section className="content-section split-layout">
        <div>
          <SectionHeading
            className="section-heading--single-line"
            eyebrow="What Defines Playtivate"
            title="Where game design meets instructional thinking"
            body="Our work sits at the intersection of game design, immersive technology, and learning design. We create experiences that are engaging, purposeful, and aligned to clear objectives."
          />
        </div>
        <div className="detail-panel">
          <p className="eyebrow">What We Bring</p>
          <ul className="feature-list compact">
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section about-stats-section">
        <StatsBand stats={stats} />
      </section>

      <ClientStrip clients={clients} />

      <section className="content-section accent-surface">
        <SectionHeading
          className="section-heading--single-line"
          eyebrow="Recognition"
          title="A track record built across product innovation, design, and digital experience"
          body="Over the years, Playtivate's work has received recognition across product innovation and digital experience categories, reflecting both creative quality and practical impact."
        />
        <div className="recognition-grid">
          {awards.map((award) => (
            <article className="recognition-card" key={`${award.event}-${award.year}`}>
              {award.logos?.length ? (
                <div className="recognition-logo-row">
                  {award.logos.map((logo) => (
                    <img
                      alt={logo.alt}
                      className="recognition-logo"
                      key={logo.src}
                      loading="lazy"
                      src={assetPath(logo.src)}
                    />
                  ))}
                </div>
              ) : (
                <p className="recognition-label">Recognition</p>
              )}
              <p className="eyebrow">{award.year}{award.location ? ` / ${award.location}` : ''}</p>
              <h3>{award.title}</h3>
              <p className="recognition-event">{award.event}</p>
              {award.note ? <p className="recognition-note">{award.note}</p> : null}
              {award.project ? <p className="recognition-project">Project: {award.project}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <CallToAction
        eyebrow="Work Together"
        title="Interested in building something meaningful together?"
        body="If you need a digital experience that helps people learn, practice, or engage more effectively, we can help shape and deliver it."
        buttonLabel="Contact Us"
      />
    </>
  );
}

export default AboutPage;