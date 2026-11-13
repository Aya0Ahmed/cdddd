import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AmbientBackground, ScrollProgressLine } from './components/MotionPrimitives';
import { HomePage } from './pages/HomePage';
import { VisionMissionPage } from './pages/VisionMissionPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { CreatorsPage } from './pages/CreatorsPage';
import { RequestPage } from './pages/RequestPage';
import type { DisciplineId, Language, PageRoute, SubmittedRequest } from './types';

function routeToHash(route: PageRoute): string {
  switch (route.name) {
    case 'home':
      return '#/';
    case 'vision':
      return '#/vision-mission';
    case 'services':
      return route.filter && route.filter !== 'all'
        ? `#/services?filter=${route.filter}`
        : '#/services';
    case 'service-detail':
      return `#/services/${route.slug}`;
    case 'creators':
      return '#/creators';
    case 'request': {
      const params = new URLSearchParams();
      if (route.preselectedService) params.set('service', route.preselectedService);
      if (route.preselectedDiscipline) params.set('discipline', route.preselectedDiscipline);
      if (route.preselectedSubScope) params.set('scope', route.preselectedSubScope);
      const qs = params.toString();
      return qs ? `#/request?${qs}` : '#/request';
    }
  }
}

function hashToRoute(hash: string): PageRoute {
  const cleaned = hash.replace(/^#/, '') || '/';
  const [pathPart, queryPart] = cleaned.split('?');
  const params = new URLSearchParams(queryPart || '');

  if (pathPart === '/vision-mission') return { name: 'vision' };
  if (pathPart === '/creators') return { name: 'creators' };
  if (pathPart === '/request') {
    const discipline = params.get('discipline') as DisciplineId | null;
    return {
      name: 'request',
      preselectedService: params.get('service') || undefined,
      preselectedDiscipline: discipline || undefined,
      preselectedSubScope: params.get('scope') || undefined,
    };
  }
  if (pathPart === '/services') {
    const filter = (params.get('filter') as DisciplineId | 'all' | null) || 'all';
    return { name: 'services', filter };
  }
  if (pathPart.startsWith('/services/')) {
    const slug = pathPart.replace('/services/', '');
    if (slug) return { name: 'service-detail', slug };
  }
  return { name: 'home' };
}

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [route, setRoute] = useState<PageRoute>(() => hashToRoute(window.location.hash));
  const [submittedRequests, setSubmittedRequests] = useState<SubmittedRequest[]>([]);
  const [transitionTick, setTransitionTick] = useState(0);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(hashToRoute(window.location.hash));
      setTransitionTick((t) => t + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((nextRoute: PageRoute) => {
    const nextHash = routeToHash(nextRoute);
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      setRoute(nextRoute);
      setTransitionTick((t) => t + 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggleLang = useCallback(() => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
    setTransitionTick((t) => t + 1);
  }, []);

  const handleAddRequest = useCallback((req: SubmittedRequest) => {
    setSubmittedRequests((prev) => [req, ...prev]);
  }, []);

  const routeKey =
    route.name === 'service-detail'
      ? `service-detail-${route.slug}`
      : route.name === 'request'
        ? `request-${route.preselectedService || ''}-${route.preselectedDiscipline || ''}-${route.preselectedSubScope || ''}`
        : route.name === 'services'
          ? `services-${route.filter || 'all'}`
          : route.name;

  const slideOffset = lang === 'ar' ? -36 : 36;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen flex flex-col text-[#F4F7F4]">
        <AmbientBackground />
        <ScrollProgressLine />

        <Header
          lang={lang}
          onToggleLang={handleToggleLang}
          route={route}
          onNavigate={navigate}
        />

        {/* Cinematic Architectural Shutter Wipe on Page Change */}
        <AnimatePresence>
          {transitionTick > 0 && (
            <motion.div
              key={`shutter-${transitionTick}`}
              initial={{ scaleY: 0, opacity: 0.95 }}
              animate={{ scaleY: [0, 1, 0], opacity: [0.95, 0.95, 0] }}
              transition={{
                duration: 0.55,
                times: [0, 0.42, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
              className="fixed inset-0 top-16 z-30 origin-top bg-gradient-to-b from-[#0B0F0C] via-[#17261A] to-[#65B307]/30 pointer-events-none"
            />
          )}
        </AnimatePresence>

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${routeKey}`}
              initial={{ opacity: 0, x: slideOffset, y: 12, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -slideOffset, y: -8, scale: 0.985 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              {route.name === 'home' && <HomePage lang={lang} onNavigate={navigate} />}
              {route.name === 'vision' && (
                <VisionMissionPage lang={lang} onNavigate={navigate} />
              )}
              {route.name === 'services' && (
                <ServicesPage
                  lang={lang}
                  initialFilter={route.filter}
                  onNavigate={navigate}
                />
              )}
              {route.name === 'service-detail' && (
                <ServiceDetailPage
                  lang={lang}
                  slug={route.slug}
                  onNavigate={navigate}
                />
              )}
              {route.name === 'creators' && <CreatorsPage lang={lang} onNavigate={navigate} />}
              {route.name === 'request' && (
                <RequestPage
                  lang={lang}
                  preselectedService={route.preselectedService}
                  preselectedDiscipline={route.preselectedDiscipline}
                  preselectedSubScope={route.preselectedSubScope}
                  submittedRequests={submittedRequests}
                  onAddRequest={handleAddRequest}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer lang={lang} onNavigate={navigate} />
      </div>
    </MotionConfig>
  );
}
