import PageHero from '../components/PageHero';

function TermsPage() {
  return (
    <>
      <PageHero
        className="page-hero--single-line"
        title="Terms and Conditions"
        body="Basic terms governing the use of the Playtivate website."
      />

      <section className="content-section split-layout">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Website Use</p>
            <h2>This site is provided for general information about Playtivate and our services.</h2>
            <p>
              By using this website, you agree to use it lawfully and in a way that
              does not interfere with its operation, security, or availability.
            </p>
          </div>
        </div>
        <div className="detail-panel legal-panel">
          <p className="eyebrow">Core Terms</p>
          <ul className="feature-list compact">
            <li>Website content may be updated without prior notice.</li>
            <li>Project discussions remain subject to separate commercial agreements.</li>
            <li>Unauthorized use of website content or systems is prohibited.</li>
          </ul>
        </div>
      </section>

      <section className="content-section accent-surface">
        <div className="story-grid">
          <article className="story-card">
            <p className="eyebrow">Content</p>
            <h2>Information only</h2>
            <p>
              The information on this website is provided for general marketing and
              informational purposes. It does not constitute a binding offer, legal
              advice, or project commitment.
            </p>
          </article>
          <article className="story-card">
            <p className="eyebrow">Intellectual Property</p>
            <h2>Ownership</h2>
            <p>
              Unless otherwise stated, the content, design, text, graphics, and brand
              elements on this website belong to Playtivate or are used with permission.
            </p>
          </article>
          <article className="story-card">
            <p className="eyebrow">Liability</p>
            <h2>Reasonable care</h2>
            <p>
              We aim to keep the website accurate and available, but we do not warrant
              uninterrupted access or that all information will always be complete,
              current, or error-free.
            </p>
          </article>
          <article className="story-card">
            <p className="eyebrow">Contact</p>
            <h2>Questions about these terms</h2>
            <p>
              For questions about website use or commercial engagement, email
              {' '}
              <a className="contact-link" href="mailto:info@playtivate.com">info@playtivate.com</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default TermsPage;