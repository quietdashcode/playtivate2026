import { Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServicesPage from './pages/ServicesPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:serviceSlug" element={<ServiceDetailPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="case-studies/:caseStudySlug" element={<CaseStudyDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;