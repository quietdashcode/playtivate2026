import CallToAction from '../components/CallToAction';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../content/siteContent';

const capabilities = [
  'Instructional design',
  'Game design',
  'Interaction design',
  'UX/UI design',
  '2D illustration and animation',
  '3D content and immersive production',
  'Unity and web-based development',
  'LMS-compatible packaging',
  'Learner tracking and analytics',
  'Deployment and maintenance support',
];

const useCases = [
  'Immersive training and simulation',
  'Curriculum-based digital learning',
  'Public education and outreach',
  'Professional capability building',
  'Scenario-based practice and assessment',
  'Engagement-led campaigns and interactive storytelling',
];

function ServicesPage() {
  return (
    <>
      <PageHero
        className="page-hero--single-line"
        // eyebrow="Services"
        title="Digital experiences designed around learning, training, and engagement."
        body="Playtivate helps organizations solve communication and capability challenges through immersive technology, interactive learning, and applied game design."
        image="/images/heroes/services.jpg"
      />

      <section className="content-section">
        <SectionHeading
          className="section-heading--single-line"
          eyebrow="What We Offer"
          title="Three core service areas with one integrated delivery approach"
          body="Each service combines strategy, content design, interaction design, and production to create experiences that are useful, engaging, and aligned to clear objectives."
        />
        <div className="card-grid three-up">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="content-section split-layout accent-surface">
        <div>
          <SectionHeading
            className="section-heading--single-line"
            eyebrow="Use Cases"
            title="Common challenges we help solve"
          />
          <ul className="feature-list">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading
            className="section-heading--single-line"
            eyebrow="Capabilities"
            title="Capabilities across the full delivery cycle"
          />
          <ul className="feature-list compact">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        eyebrow="Project Fit"
        title="Need the right format for your learning or engagement challenge?"
        body="We can help identify whether VR/AR, e-learning, serious games, or a hybrid approach is the right fit."
        buttonLabel="Start a Conversation"
      />
    </>
  );
}

export default ServicesPage;