import PageHero from '../components/PageHero';
const offices = [
  {
    name: 'Singapore HQ',
    address: '60 Paya Lebar Road, #05-41 Paya Lebar Square, Singapore 409051',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=60+Paya+Lebar+Road+%2305-41+Paya+Lebar+Square+Singapore+409051',
    embedUrl: 'https://maps.google.com/maps?q=60%20Paya%20Lebar%20Road%20%2305-41%20Paya%20Lebar%20Square%20Singapore%20409051&z=16&output=embed',
  },
  {
    name: 'Malaysia Office',
    address: 'B-26-09 Trefoil@Setia City, No. 2, Jalan Setia Dagang AH U13/AH, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=B-26-09+Trefoil+Setia+City+No.+2+Jalan+Setia+Dagang+AH+U13%2FAH+Setia+Alam+Seksyen+U13+40170+Shah+Alam+Selangor',
    embedUrl: 'https://maps.google.com/maps?q=B-26-09%20Trefoil%40Setia%20City%20No.%202%20Jalan%20Setia%20Dagang%20AH%20U13%2FAH%20Setia%20Alam%20Seksyen%20U13%2040170%20Shah%20Alam%20Selangor&z=16&output=embed',
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        className="page-hero--single-line page-hero--brighter-image"
        title="Let's discuss what you need to build."
        body="If you are planning a VR/AR experience, e-learning product, or serious game, reach us by email or use the maps below to find the right office."
        image="/images/heroes/contact.jpg"
      />

      <section className="content-section accent-surface">
        <div className="contact-layout">
          <aside className="detail-panel contact-rail">
            <div className="contact-rail-header">
              <p className="eyebrow">Contact</p>
            </div>

            <h2 className="contact-rail-title">Start the conversation.</h2>
            <p className="contact-rail-copy">
              Send project briefs, partnership enquiries, or general questions and we will route
              you to the right team.
            </p>

            <div className="contact-actions">
              <a className="button primary" href="mailto:info@playtivate.com">info@playtivate.com</a>
            </div>

            <div className="contact-rail-meta">
              <div className="contact-rail-meta-card">
                <strong>2</strong>
                <span>office locations</span>
              </div>
              <div className="contact-rail-meta-card">
                <strong>SG + MY</strong>
                <span>regional coverage</span>
              </div>
            </div>
          </aside>

          <div className="office-grid">
          {offices.map((office) => (
            <article className="story-card office-card" key={office.name}>
              <p className="eyebrow">Office</p>
              <h2>{office.name}</h2>
              <p className="office-address">{office.address}</p>
              <div className="contact-actions">
                <a className="button secondary" href={office.mapsUrl} rel="noreferrer" target="_blank">
                  Open In Google Maps
                </a>
              </div>
              <div className="office-map-frame">
                <iframe
                  className="office-map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={office.embedUrl}
                  title={`${office.name} map`}
                />
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;