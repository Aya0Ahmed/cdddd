import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Clock, ShieldCheck, Users } from 'lucide-react';
import { DISCIPLINE_LABELS, SERVICES, SPECIALIST_ROLES, UI_COPY } from '../data/content';
import type { Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface ServiceDetailPageProps {
  lang: Language;
  slug: string;
  onNavigate: (route: PageRoute) => void;
}

export function ServiceDetailPage({ lang, slug, onNavigate }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.slug === slug) ?? SERVICES[0];
  const [selectedSubId, setSelectedSubId] = useState<string>(service.subScopes[0]?.id ?? '');

  const BackArrow = lang === 'ar' ? ArrowRight : ArrowLeft;
  const ForwardArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const relatedSpecialists = SPECIALIST_ROLES.filter((role) =>
    service.assignedSpecialists.includes(role.id),
  );

  const selectedSub =
    service.subScopes.find((sub) => sub.id === selectedSubId) ?? service.subScopes[0];

  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="space-y-14">
      {/* Full-Bleed Parallax Photographic Header */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={service.image}
            alt={service.imageAlt[lang]}
            className="w-full h-full object-cover opacity-40"
            fallbackTitle={service.title[lang]}
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/75 to-[#0B0F0C]/50 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 pt-8 pb-16 space-y-6">
          <button
            type="button"
            onClick={() => onNavigate({ name: 'services', filter: 'all' })}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#B2BFB4] hover:text-[#85DF1A] transition-colors cursor-pointer"
          >
            <BackArrow className="w-4 h-4" />
            <span>{UI_COPY.serviceDetail.backToServices[lang]}</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl space-y-4"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#B2BFB4]">
              <span className="font-mono tabular-nums font-bold text-[#85DF1A]">
                {service.indexNumber}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-white">
                {DISCIPLINE_LABELS[service.discipline][lang]}
              </span>
              <span aria-hidden="true">·</span>
              <span>{service.shortTagline[lang]}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-balance">
              {service.title[lang]}
            </h1>

            <HorizonArc className="max-w-sm" />

            <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed">
              {service.detailedExplanation[lang]}
            </p>
          </motion.div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-4 h-4 text-[#85DF1A] shrink-0" />
              <span>{service.estimatedTimeline[lang]}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <ShieldCheck className="w-4 h-4 text-[#85DF1A] shrink-0" />
              <span>{service.jurisdictionNote[lang]}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-14">
        {/* Interactive Split-View Sub-Scopes Inspector */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {UI_COPY.serviceDetail.scopeHeading[lang]}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-2.5">
              {service.subScopes.map((sub, idx) => {
                const isFocused = selectedSubId === sub.id;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setSelectedSubId(sub.id)}
                    className={`w-full text-start p-4 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-between gap-4 ${
                      isFocused
                        ? 'bg-[#65B307]/15 text-white border-[#85DF1A]'
                        : 'bg-[#131915]/85 text-[#B2BFB4] border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono tabular-nums font-bold text-[#85DF1A]">
                        {service.indexNumber}.{idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {sub.title[lang]}
                      </span>
                    </div>
                    <ForwardArrow
                      className={`w-4 h-4 shrink-0 ${
                        isFocused ? 'text-[#85DF1A]' : 'text-[#B2BFB4]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-[#131915]/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-[16/8] w-full overflow-hidden bg-[#0B0F0C] border-b border-white/10">
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt[lang]}
                  className="w-full h-full object-cover"
                  fallbackTitle={selectedSub?.title[lang]}
                />
              </div>

              <AnimatePresence mode="wait">
                {selectedSub && (
                  <motion.div
                    key={selectedSub.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.24 }}
                    className="p-6 sm:p-8 space-y-5"
                  >
                    <span className="text-xs font-medium text-[#85DF1A]">
                      {service.title[lang]}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {selectedSub.title[lang]}
                    </h3>
                    <p className="text-sm sm:text-base text-[#B2BFB4] leading-relaxed">
                      {selectedSub.description[lang]}
                    </p>
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          onNavigate({
                            name: 'request',
                            preselectedService: service.id,
                            preselectedDiscipline: service.discipline,
                            preselectedSubScope: selectedSub.id,
                          })
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-lg transition-colors cursor-pointer"
                      >
                        <span>
                          {lang === 'ar' ? 'تقديم طلب لهذا البند' : 'Request This Scope'}
                        </span>
                        <ForwardArrow className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Deliverables & Assigned Specialists */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-[#131915]/85 backdrop-blur-md border border-white/10 rounded-2xl p-7 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl font-bold text-white">
              {UI_COPY.serviceDetail.deliverablesHeading[lang]}
            </h2>
            <ul className="space-y-3.5">
              {service.deliverables.map((deliv, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#F4F7F4]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#65B307]/20 text-[#85DF1A] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{deliv[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 bg-[#131915]/85 backdrop-blur-md border border-white/10 rounded-2xl p-7 sm:p-8 space-y-5">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#85DF1A]" />
              <h2 className="font-display text-2xl font-bold text-white">
                {UI_COPY.serviceDetail.specialistsHeading[lang]}
              </h2>
            </div>

            <div className="space-y-4">
              {relatedSpecialists.map((spec) => (
                <div
                  key={spec.id}
                  className="p-4 rounded-xl bg-[#0B0F0C]/75 border border-white/10 flex items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-sm font-bold text-white">{spec.title[lang]}</h3>
                    <p className="text-xs text-[#B2BFB4] mt-0.5">{spec.subtitle[lang]}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate({ name: 'request', preselectedDiscipline: spec.id })}
                    className="text-xs font-semibold text-[#85DF1A] hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {spec.pluralTitle[lang]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Other Services */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {lang === 'ar' ? 'خدمات أخرى قد تهمك' : 'Explore Related Advisory Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((other) => (
              <button
                key={other.id}
                type="button"
                onClick={() => onNavigate({ name: 'service-detail', slug: other.slug })}
                className="group text-start bg-[#131915]/85 border border-white/10 hover:border-[#85DF1A]/60 rounded-xl overflow-hidden transition-colors cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#0B0F0C]">
                  <ResilientImage
                    src={other.image}
                    alt={other.imageAlt[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackTitle={other.title[lang]}
                  />
                </div>
                <div className="p-4 space-y-1">
                  <div className="text-xs font-mono tabular-nums text-[#85DF1A] font-semibold">
                    {other.indexNumber}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#85DF1A] transition-colors">
                    {other.title[lang]}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Bottom Service Conversion Bar */}
        <section className="bg-gradient-to-br from-[#19241B] to-[#111712] border border-[#65B307]/40 text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <p className="text-xs font-medium text-[#85DF1A]">{service.title[lang]}</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              {UI_COPY.serviceDetail.ctaHeading[lang]}
            </h2>
          </div>

          <button
            type="button"
            onClick={() =>
              onNavigate({
                name: 'request',
                preselectedService: service.id,
                preselectedDiscipline: service.discipline,
                preselectedSubScope: selectedSubId,
              })
            }
            className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold bg-[#65B307] hover:bg-[#85DF1A] text-[#0B0F0C] rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>{UI_COPY.serviceDetail.ctaBtn[lang]}</span>
            <ForwardArrow className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
}
