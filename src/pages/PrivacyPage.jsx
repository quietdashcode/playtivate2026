import PageHero from '../components/PageHero';

function PrivacyPage() {
  return (
    <>
      <PageHero
        className="page-hero--single-line"
        title="Privacy Policy"
        body="How Playtivate handles contact enquiries and website information."
      />

      <section className="content-section split-layout">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Overview</p>
            <h2>We only collect the information needed to respond to your enquiry.</h2>
            <p>
              When you contact Playtivate through this website, we may collect your
              name, organization, email address, service interest, project details,
              and timeline so we can review your request and follow up appropriately.
            </p>
          </div>
        </div>
        <div className="detail-panel legal-panel">
          <p className="eyebrow">What We Use It For</p>
          <ul className="feature-list compact">
            <li>Replying to enquiries and project requests.</li>
            <li>Assessing service fit, scope, and follow-up needs.</li>
            <li>Maintaining basic records of business communications.</li>
          </ul>
        </div>
      </section>

      <section className="content-section accent-surface">
        <div className="story-grid">
          <article className="story-card">
            <p className="eyebrow">Data Handling</p>
            <h2>Contact form information</h2>
            <p>
              Information submitted through the contact form is sent to Playtivate by
              email and may be stored in our business communication systems for client
              service, project evaluation, and operational follow-up.
            </p>
          </article>
          <article className="story-card">
            <p className="eyebrow">Sharing</p>
            <h2>Limited use</h2>
            <p>
              We do not sell your information. We only share information where it is
              necessary to operate the website, manage communications, or comply with
              legal obligations.
            </p>
          </article>
          <article className="story-card">
            <p className="eyebrow">Security</p>
            <h2>Reasonable safeguards</h2>
            <p>
              We use reasonable administrative and technical measures to protect the
              information submitted through this site, but no website or email system
              can guarantee absolute security.
            </p>
          </article>
          <article className="story-card">
            <p className="eyebrow">Contact</p>
            <h2>Questions about privacy</h2>
            <p>
              If you have questions about this policy or want to request an update or
              deletion of enquiry information you previously submitted, email
              {' '}
              <a className="contact-link" href="mailto:info@playtivate.com">info@playtivate.com</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default PrivacyPage;