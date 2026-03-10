import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { navigation } from '../content/siteContent';
import { assetPath } from '../utils/assetPath';

function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Playtivate home">
          <img alt="Playtivate" className="brand-logo" src={assetPath('/images/home/playtivate-logo.svg')} />
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              key={item.href}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img alt="Playtivate" className="footer-logo" src={assetPath('/images/home/playtivate-logo-white.svg')} />
          <p>
            Playtivate designs immersive digital experiences for learning,
            training, and engagement across VR/AR, e-learning, and serious
            games.
          </p>
        </div>
        <div className="footer-meta">
          <span>Singapore and Malaysia</span>
          <span>info@playtivate.com</span>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;