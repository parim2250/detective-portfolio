import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Always-on shell ───────────────────────────────────────
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import InvestigationStatus from './components/InvestigationStatus';
import InvestigationAudio from './hooks/useAudio';
import SmoothScroll from './components/SmoothScroll';

// ─── Above-the-fold (load immediately) ─────────────────────
import Landing from './sections/Landing';
import SecureChannel from './sections/SecureChannel';

// ─── Lazy sections (load when near viewport) ───────────────
const SuspectProfile     = lazy(() => import('./sections/SuspectProfile'));
const InvestigationBoard = lazy(() => import('./sections/InvestigationBoard'));
const EvidenceLocker     = lazy(() => import('./sections/EvidenceLocker'));
const InvestigationLog   = lazy(() => import('./sections/InvestigationLog'));
const TrainingRecords    = lazy(() => import('./sections/TrainingRecords'));
const InformantReports   = lazy(() => import('./sections/InformantReports'));
// If your Field Investigations content lives in FieldInvestigations.jsx instead,
// swap the line above for:
// const InformantReports = lazy(() => import('./sections/FieldInvestigations'));

// Placeholder while a lazy section loads
const SectionFallback = () => (
  <div style={{ minHeight: '100vh', background: 'var(--color-bg, #100c0a)' }} />
);

// Only mount + fetch a section when user is ~600px away
function LazySection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : '100vh' }}>
      {isVisible ? (
        <Suspense fallback={<SectionFallback />}>{children}</Suspense>
      ) : (
        <SectionFallback />
      )}
    </div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Skip intro for bots / Lighthouse
    const isBot =
      typeof navigator !== 'undefined' &&
      /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(
        navigator.userAgent
      );
    if (isBot) return false;
    return sessionStorage.getItem('introPlayed') !== 'true';
  });

  useEffect(() => {
    if (!showIntro) {
      sessionStorage.setItem('introPlayed', 'true');
    }
  }, [showIntro]);

  return (
    <InvestigationAudio>
      <SmoothScroll>
        <AnimatePresence mode="wait">
          {showIntro && (
            <LoadingScreen
              key="intro"
              onComplete={() => setShowIntro(false)}
            />
          )}
        </AnimatePresence>

        {!showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ background: 'var(--color-bg, #100c0a)', minHeight: '100vh' }}
          >
            <Navbar />

            {/* 1. Hero */}
            <div id="home">
              <Landing />
            </div>

            {/* 2. About / Dossier */}
            <LazySection>
              <div id="about">
                <SuspectProfile />
              </div>
            </LazySection>

            {/* 3. Projects / Case Files */}
            <LazySection>
              <div id="projects">
                <InvestigationBoard />
              </div>
            </LazySection>

            {/* 4. Skills / Toolkit */}
            <LazySection>
              <div id="skills">
                <EvidenceLocker />
              </div>
            </LazySection>

            {/* 5. Experience / Missions log */}
            <LazySection>
              <div id="experience">
                <InvestigationLog />
              </div>
            </LazySection>

            {/* 6. Education / Training */}
            <LazySection>
              <div id="education">
                <TrainingRecords />
              </div>
            </LazySection>

            {/* 7. Field Investigations */}
            <LazySection>
              <div id="missions">
                <InformantReports />
              </div>
            </LazySection>

            {/* 8. Contact / Dispatch */}
            <div id="contact">
              <SecureChannel />
            </div>

            <Footer />
            <InvestigationStatus />
          </motion.div>
        )}
      </SmoothScroll>
    </InvestigationAudio>
  );
}