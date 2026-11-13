import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { ASSETS, DISCIPLINE_LABELS, SERVICES, UI_COPY } from '../data/content';
import type { DisciplineId, Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface ServicesPageProps {
  lang: Language;
  initialFilter?: DisciplineId | 'all';
  onNavigate: (route: PageRoute) => void;
}

const FILTERS: (DisciplineId | 'all')[] = ['all', 'legal', 'accounting', 'research'];

export function ServicesPage({ lang, initialFilter = 'all', onNavigate }: ServicesPageProps) {
  const [activeFilter, setActiveFilter] = useState<DisciplineId | 'all'>(initialFilter);
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);

  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter(
          (service) =>
            service.discipline === activeFilter ||
            service.secondaryDisciplines?.includes(activeFilter),
        );

  return (
    <div className="space-y-12">
      {/* Photographic Header Banner */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.maBoardroom}
            alt={
              lang === 'ar'
                ? 'غرفة استشارات الصفقات والعقود في سي دي للاستشارات'
                : 'CD Consulting advisory and M&A strategy room'
            }
            className="w-full h-full object-cover opacity-35"
            fallbackTitle="CD Consulting Services"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/70 to-[#0B0F0C]/50 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-xs sm:text-sm font-medium text-[#85DF1A]">
              {lang === 'ar'
                ? 'القانون · المحاسبة · الأبحاث والموافقات'
                : 'Legal · Accounting · Research & Clearances'}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              {UI_COPY.servicesPage.pageTitle[lang]}
            </h1>
            <HorizonArc className="max-w-sm" />
            <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed">
              {UI_COPY.servicesPage.pageIntro[lang]}
            </p>
          </motion.div>

          {/* Interactive Segmented Discipline Filter */}
          <div
            role="tablist"
            aria-label={lang === 'ar' ? 'تصفية الخدمات حسب التخصص' : 'Filter services by discipline'}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#131915]/85 backdrop-blur-xl border border-white/15 rounded-xl"
          >
            {FILTERS.map((filterKey) => {
              const isSelected = activeFilter === filterKey;
              return (
                <button
                  key={filterKey}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filterKey)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected ? 'text-[#0B0F0C] font-semibold' : 'text-[#B2BFB4] hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="services-filter-indicator"
                      transition={{ type: 'spring', stiffness: 440, damping: 34 }}
                      className="absolute inset-0 bg-[#65B307] rounded-lg"
                    />
                  )}
                  <span className="relative z-10">{DISCIPLINE_LABELS[filterKey][lang]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Rich Photo & Expandable Scope Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <motion.section layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isExpanded = expandedId === service.id;
              return (
                <motion.article
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200"
                >
                  <div>
                    <div
                      onClick={() => onNavigate({ name: 'service-detail', slug: service.slug })}
                      className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-[#0B0F0C] cursor-pointer"
                    >
                      <ResilientImage
                        src={service.image}
                        alt={service.imageAlt[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        fallbackTitle={service.title[lang]}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-[#131915]/20 to-transparent" />
                      <div className="absolute bottom-4 inset-x-5 flex items-center justify-between text-xs text-white">
                        <span className="font-medium text-[#85DF1A]">
                          {DISCIPLINE_LABELS[service.discipline][lang]}
                        </span>
                        <span className="font-mono tabular-nums font-bold">
                          {service.indexNumber}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-4">
                      <h2
                        onClick={() => onNavigate({ name: 'service-detail', slug: service.slug })}
                        className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#85DF1A] transition-colors leading-snug cursor-pointer"
                      >
                        {service.title[lang]}
                      </h2>

                      <p className="text-sm sm:text-base text-[#B2BFB4] leading-relaxed">
                        {service.summary[lang]}
                      </p>

                      {/* Expandable Sub-Scopes Accordion */}
                      <div className="pt-2 border-t border-white/10">
                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : service.id)}
                          className="w-full py-2 flex items-center justify-between text-xs sm:text-sm font-semibold text-white hover:text-[#85DF1A] transition-colors cursor-pointer"
                        >
                          <span>
                            {lang === 'ar'
                              ? `النطاقات التفصيلية (${service.subScopes.length})`
                              : `Included Sub-Scopes (${service.subScopes.length})`}
                          </span>
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4 text-[#85DF1A]" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <ul className="pt-2 pb-1 space-y-2 text-xs sm:text-sm text-[#B2BFB4]">
                                {service.subScopes.map((sub) => (
                                  <li
                                    key={sub.id}
                                    className="flex items-start justify-between gap-3 p-3 rounded-lg bg-[#0B0F0C]/80 border border-white/10"
                                  >
                                    <div>
                                      <div className="font-semibold text-white">
                                        {sub.title[lang]}
                                      </div>
                                      <div className="text-xs text-[#B2BFB4] mt-0.5">
                                        {sub.description[lang]}
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        onNavigate({
                                          name: 'request',
                                          preselectedService: service.id,
                                          preselectedDiscipline: service.discipline,
                                          preselectedSubScope: sub.id,
                                        })
                                      }
                                      className="text-xs font-semibold text-[#85DF1A] hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                                    >
                                      {lang === 'ar' ? 'اطلب' : 'Request'}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 py-5 bg-[#0D120E]/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate({ name: 'service-detail', slug: service.slug })}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#85DF1A] transition-colors cursor-pointer"
                    >
                      <span>{UI_COPY.servicesPage.exploreBtn[lang]}</span>
                      <DirectionalArrow className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onNavigate({
                          name: 'request',
                          preselectedService: service.id,
                          preselectedDiscipline: service.discipline,
                        })
                      }
                      className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      {UI_COPY.servicesPage.requestThisBtn[lang]}
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
}
