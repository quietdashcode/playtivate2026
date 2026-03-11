import { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import { assetPath } from '../utils/assetPath';

const serviceOptions = ['VR/AR', 'E-Learning', 'Serious Games', 'Not Sure Yet'];
const formEndpoint = assetPath('/contact.php');
const tokenEndpoint = assetPath('/contact-token.php');

function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [tokenStatus, setTokenStatus] = useState('loading');

  useEffect(() => {
    let ignore = false;

    async function loadToken() {
      try {
        setTokenStatus('loading');

        const response = await fetch(tokenEndpoint, {
          headers: {
            Accept: 'application/json',
          },
        });

        const result = await response.json().catch(() => null);

        if (!response.ok || !result?.ok || !result?.token) {
          throw new Error('Unable to initialize the contact form right now.');
        }

        if (!ignore) {
          setCsrfToken(result.token);
          setTokenStatus('ready');
        }
      } catch {
        if (!ignore) {
          setCsrfToken('');
          setTokenStatus('error');
        }
      }
    }

    loadToken();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!csrfToken) {
      setStatus('error');
      setMessage('The form is not ready yet. Please refresh the page or email info@playtivate.com.');
      return;
    }

    const formData = new FormData(form);
    formData.set('csrfToken', csrfToken);

    try {
      setStatus('loading');
      setMessage('');

      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        throw new Error(
          result?.message
            || 'Unable to send your message right now. Please email info@playtivate.com instead.',
        );
      }

      form.reset();
      setCsrfToken('');
      setTokenStatus('loading');
      setStatus('success');
      setMessage(result.message || 'Thanks. Your enquiry has been sent.');

      const tokenResponse = await fetch(tokenEndpoint, {
        headers: {
          Accept: 'application/json',
        },
      });
      const tokenResult = await tokenResponse.json().catch(() => null);

      if (tokenResponse.ok && tokenResult?.ok && tokenResult?.token) {
        setCsrfToken(tokenResult.token);
        setTokenStatus('ready');
      } else {
        setTokenStatus('error');
      }
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please email info@playtivate.com instead.',
      );

      if (tokenStatus !== 'ready') {
        setTokenStatus('error');
      }
    }
  }

  return (
    <>
      <PageHero
        className="page-hero--single-line page-hero--brighter-image"
        // eyebrow="Contact"
        title="Let's discuss what you need to build."
        body="If you are planning a VR/AR experience, e-learning product, or serious game, we can help shape the concept and recommend the right approach."
        image="/images/heroes/contact.jpg"
      />

      <section className="content-section split-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="section-heading">
            <p className="eyebrow">Start The Conversation</p>
            <h2>Tell us about your goals, audience, and timeline.</h2>
            <p>We will follow up with the next steps.</p>
          </div>

          <input
            autoComplete="off"
            className="contact-form-honeypot"
            name="website"
            tabIndex="-1"
            type="text"
          />

          <label>
            Name
            <input maxLength="120" name="name" required type="text" />
          </label>
          <label>
            Organization
            <input maxLength="160" name="organization" required type="text" />
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
            <textarea minLength="20" name="projectGoals" required rows="5" />
          </label>
          <label>
            Timeline
            <input maxLength="120" name="timeline" type="text" />
          </label>

          <button
            className="button primary"
            disabled={status === 'loading' || tokenStatus !== 'ready'}
            type="submit"
          >
            {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
          </button>

          {message ? (
            <p className={`form-note ${status === 'error' ? 'form-note-error' : 'form-note-success'}`}>
              {message}
            </p>
          ) : tokenStatus === 'loading' ? (
            <p className="form-note">Preparing secure form session...</p>
          ) : tokenStatus === 'error' ? (
            <p className="form-note form-note-error">
              The form is only available when this site is running on PHP hosting. For now, email
              {' '}
              info@playtivate.com.
            </p>
          ) : (
            <p className="form-note">
              This form uses a secure server-side mail handler on PHP hosting.
            </p>
          )}
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