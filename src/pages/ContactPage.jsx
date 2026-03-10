import { useState } from 'react';
import PageHero from '../components/PageHero';

const serviceOptions = ['VR/AR', 'E-Learning', 'Serious Games', 'Not Sure Yet'];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        className="page-hero--single-line"
        // eyebrow="Contact"
        title="Let's discuss what you need to build."
        body="If you are planning a VR/AR experience, e-learning product, or serious game, we can help shape the concept and recommend the right approach."
        image="/images/heroes/contact.jpg"
      />

      <section className="content-section split-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="section-heading section-heading--single-line">
            <p className="eyebrow">Start The Conversation</p>
            <h2>Tell us about your goals, audience, and timeline.</h2>
            <p>We will follow up with the next steps.</p>
          </div>

          <label>
            Name
            <input name="name" required type="text" />
          </label>
          <label>
            Organization
            <input name="organization" required type="text" />
          </label>
          <label>
            Email
            <input name="email" required type="email" />
          </label>
          <label>
            Service Interest
            <select defaultValue="VR/AR" name="serviceInterest">
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Project Goals
            <textarea name="projectGoals" required rows="5" />
          </label>
          <label>
            Timeline
            <input name="timeline" type="text" />
          </label>

          <button className="button primary" type="submit">
            Send Enquiry
          </button>

          {submitted ? (
            <p className="form-note">
              Thanks. This demo form is ready for backend wiring. For now, please
              follow up via info@playtivate.com.
            </p>
          ) : null}
        </form>

        <aside className="detail-panel contact-panel">
          <p className="eyebrow">Locations</p>
          <h2>Singapore and Malaysia</h2>
          <div className="office-block">
            <strong>Singapore Office</strong>
            <p>60 Paya Lebar Road, #05-41 Paya Lebar Square, Singapore 409051</p>
          </div>
          <div className="office-block">
            <strong>Malaysia Office</strong>
            <p>
              B-26-09 Trefoil@Setia City, No. 2, Jalan Setia Dagang AH U13/AH,
              Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor
            </p>
          </div>
          <div className="office-block">
            <strong>Email</strong>
            <p>info@playtivate.com</p>
          </div>
        </aside>
      </section>
    </>
  );
}

export default ContactPage;