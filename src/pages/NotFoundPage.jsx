import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="page-hero not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>The page you requested does not exist in this site build.</p>
      <Link className="button primary" to="/">
        Return Home
      </Link>
    </section>
  );
}

export default NotFoundPage;