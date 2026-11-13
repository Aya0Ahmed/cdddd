import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calculator, ChevronLeft, ChevronRight, FileSearch, Scale } from 'lucide-react';
import { ASSETS, DISCIPLINE_LABELS, SERVICES, SPECIALIST_ROLES, UI_COPY } from '../data/content';
import type { DisciplineId, Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface HomePageProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

const DISCIPLINE_ICON: Record<DisciplineId, typeof Scale> = {
  legal: Scale,
  accounting: Calculator,
  research: FileSearch,
};

export function HomePage({ lang, onNavigate }: HomePageProps) {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const PrevIcon = lang === 'ar' ? ChevronRight : ChevronLeft;
  const NextIcon = lang === 'ar' ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % SERVICES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const spotlight = SERVICES[spotlightIndex];

  const workflowSteps = [
    {
      num: '01',
      title: { ar: 'استلام وتصنيف الملف', en: 'Mandate Intake & Triage' },
      desc: {
        ar: 'تحديد المسار القانوني أو المحاسبي أو البحثي المطلوب خلال ساعات من تقديم الطلب.',
        en: 'Immediate classification across Legal, Accounting, or Regulatory Research streams.',
      },
    },
    {
      num: '02',
      title: { ar: 'الفحص ثلاثي التخصصات', en: 'Tri-Disciplinary Audit' },
      desc: {
        ar: 'مراجعة متزامنة بين المحامي والمحاسب والباحث لمنع أي ثغرات تعاقدية أو ضريبية أو إجرائية.',
        en: 'Synchronized review by lawyers, accountants, and researchers to prevent blind spots.',
      },
    },
    {
      num: '03',
      title: { ar: 'الصياغة والتعامل مع الهيئات', en: 'Drafting & Authority Liaison' },
      desc: {
        ar: 'إعداد العقود والقوائم المالية أو مباشرة إجراءات التراخيص والموافقات الأمنية في مصر.',
        en: 'Contract execution, statement compilation, or direct Egyptian authority representation.',
      },
    },
    {
      num: '04',
      title: { ar: 'التسليم والحوكمة المستمرة', en: 'Handover & Continuity' },
      desc: {
        ar: 'تسليم المخرجات النهائية الموثقة مع جدول متابعة للتجديدات أو الالتزامات الدورية.',
        en: 'Final notarized/certified deliverables with ongoing compliance tracking.',
      },
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Cinematic Full-Bleed Architectural Hero */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.cairoSkyline}
            alt={
              lang === 'ar'
                ? 'أفق القاهرة وكورنيش النيل عند الغروب'
                : 'Cairo Nile Corniche corporate towers at golden hour'
            }
            className="w-full h-full object-cover opacity-45"
            fallbackTitle="CD Consulting — Cairo"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/65 to-[#0B0F0C]/45 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 pt-14 pb-20 sm:pt-20 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left/Start Editorial Hero Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-3 bg-[#131915]/80 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-2">
                <img
                  src={ASSETS.logo}
                  alt="CD Consulting Logo"
                  className="h-8 w-auto object-contain rounded bg-white p-0.5"
                />
                <span className="text-xs sm:text-sm font-medium text-[#85DF1A]">
                  {UI_COPY.hero.kicker[lang]}
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight leading-[1.12] text-balance text-white">
                {UI_COPY.hero.headline[lang]}
              </h1>

              <HorizonArc className="max-w-md" />

              <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed max-w-[58ch]">
                {UI_COPY.hero.subheadline[lang]}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request' })}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] active:scale-[0.98] transition-all duration-150 rounded-xl cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{UI_COPY.hero.primaryCta[lang]}</span>
                  <DirectionalArrow className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'services', filter: 'all' })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors duration-150 rounded-xl cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{UI_COPY.hero.secondaryCta[lang]}</span>
                </button>
              </div>
            </motion.div>

            {/* Right/End Interactive Live Service Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-[#131915]/90 backdrop-blur-xl border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0F0C]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={spotlight.id}
                      initial={{ opacity: 0, scale: 1.07 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full"
                    >
                      <ResilientImage
                        src={spotlight.image}
                        alt={spotlight.imageAlt[lang]}
                        className="w-full h-full object-cover"
                        fallbackTitle={spotlight.title[lang]}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-transparent to-transparent" />

                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-xs font-mono tabular-nums bg-[#0B0F0C]/80 backdrop-blur-md text-[#85DF1A] rounded-md border border-white/10">
                      {spotlight.indexNumber} / 06
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        aria-label={lang === 'ar' ? 'الخدمة السابقة' : 'Previous service'}
                        onClick={() =>
                          setSpotlightIndex(
                            (prev) => (prev - 1 + SERVICES.length) % SERVICES.length,
                          )
                        }
                        className="w-8 h-8 rounded-lg bg-[#0B0F0C]/80 hover:bg-[#65B307] hover:text-[#0B0F0C] text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <PrevIcon className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        aria-label={lang === 'ar' ? 'الخدمة التالية' : 'Next service'}
                        onClick={() =>
                          setSpotlightIndex((prev) => (prev + 1) % SERVICES.length)
                        }
                        className="w-8 h-8 rounded-lg bg-[#0B0F0C]/80 hover:bg-[#65B307] hover:text-[#0B0F0C] text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <NextIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={spotlight.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 space-y-3"
                  >
                    <div className="text-xs font-medium text-[#85DF1A]">
                      {DISCIPLINE_LABELS[spotlight.discipline][lang]}
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                      {spotlight.title[lang]}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#B2BFB4] line-clamp-2 leading-relaxed">
                      {spotlight.summary[lang]}
                    </p>
                    <div className="pt-3 flex items-center justify-between border-t border-white/10">
                      <button
                        type="button"
                        onClick={() =>
                          onNavigate({ name: 'service-detail', slug: spotlight.slug })
                        }
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{UI_COPY.homeServices.inspectService[lang]}</span>
                        <DirectionalArrow className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5">
                        {SERVICES.map((s, idx) => (
                          <button
                            key={s.id}
                            type="button"
                            aria-label={s.title[lang]}
                            onClick={() => setSpotlightIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                              idx === spotlightIndex ? 'w-5 bg-[#85DF1A]' : 'w-1.5 bg-white/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Interactive Practice Quick-Jump Strip */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICES.map((srv, idx) => {
              const active = idx === spotlightIndex;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSpotlightIndex(idx)}
                  className={`text-start p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#65B307]/15 border-[#85DF1A]/60 text-white'
                      : 'bg-[#131915]/60 border-white/10 text-[#B2BFB4] hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div className="text-[11px] font-mono tabular-nums text-[#85DF1A]">
                    {srv.indexNumber}
                  </div>
                  <div className="text-xs font-semibold line-clamp-1 mt-0.5">{srv.title[lang]}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Three Photographic Specialist Divisions (Lawyers / Accountants / Researchers) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              {UI_COPY.pillars.heading[lang]}
            </h2>
            <p className="text-base text-[#B2BFB4]">{UI_COPY.pillars.subheading[lang]}</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ name: 'creators' })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <span>{UI_COPY.nav.creators[lang]}</span>
            <DirectionalArrow className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIALIST_ROLES.map((role, index) => {
            const Icon = DISCIPLINE_ICON[role.id];
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0F0C]">
                    <ResilientImage
                      src={role.image}
                      alt={role.imageAlt[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      fallbackTitle={role.title[lang]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-[#131915]/30 to-transparent" />
                    <div className="absolute bottom-4 inset-x-5 flex items-center justify-between text-white">
                      <div className="w-10 h-10 rounded-xl bg-[#65B307] text-[#0B0F0C] flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5" strokeWidth={1.85} />
                      </div>
                      <span className="text-xs font-mono tabular-nums text-[#85DF1A]">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{role.title[lang]}</h3>
                      <p className="text-xs text-[#85DF1A] font-medium">{role.subtitle[lang]}</p>
                    </div>

                    <p className="text-sm text-[#B2BFB4] leading-relaxed">
                      {role.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#0D120E]/80 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate({ name: 'request', preselectedDiscipline: role.id })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#85DF1A] transition-colors cursor-pointer"
                  >
                    <span>{role.pluralTitle[lang]}</span>
                    <DirectionalArrow className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate({ name: 'services', filter: role.id })}
                    className="text-xs font-medium text-[#B2BFB4] hover:text-white cursor-pointer"
                  >
                    {lang === 'ar' ? 'عرض الخدمات' : 'View Scope'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Visual 6-Service Mosaic Gallery */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              {UI_COPY.homeServices.heading[lang]}
            </h2>
            <p className="text-base text-[#B2BFB4]">{UI_COPY.homeServices.subheading[lang]}</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ name: 'services', filter: 'all' })}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#131915] border border-white/15 hover:border-[#85DF1A] rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <span>{UI_COPY.homeServices.viewAll[lang]}</span>
            <DirectionalArrow className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => onNavigate({ name: 'service-detail', slug: service.slug })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.34, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group text-start bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85DF1A]"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0F0C]">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    fallbackTitle={service.title[lang]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-[#131915]/20 to-transparent" />
                  <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-xs text-white">
                    <span className="font-medium text-[#85DF1A]">
                      {DISCIPLINE_LABELS[service.discipline][lang]}
                    </span>
                    <span className="font-mono tabular-nums font-semibold">
                      {service.indexNumber}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#85DF1A] transition-colors leading-snug">
                    {service.title[lang]}
                  </h3>

                  <p className="text-sm text-[#B2BFB4] leading-relaxed">
                    {service.summary[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#0D120E]/80 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white">
                <span>{UI_COPY.homeServices.inspectService[lang]}</span>
                <DirectionalArrow className="w-4 h-4 text-[#85DF1A] transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* 4. Interactive Execution Workflow Strip */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="bg-[#131915]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1.5">
              <span className="text-xs font-medium text-[#85DF1A]">
                {UI_COPY.holdingName[lang]}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'ar'
                  ? 'مسار تنفيذ الملفات خطوة بخطوة'
                  : 'How We Execute Client Mandates'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ name: 'vision' })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer"
            >
              <span>{UI_COPY.nav.vision[lang]}</span>
              <DirectionalArrow className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`relative text-start p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#65B307]/15 text-white border-[#85DF1A]'
                      : 'bg-[#0B0F0C]/70 text-[#B2BFB4] border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono tabular-nums font-bold text-[#85DF1A]">
                      {step.num}
                    </span>
                    {isSelected && (
                      <motion.span
                        layoutId="workflow-active-bar"
                        className="h-1.5 w-8 rounded-full bg-[#85DF1A]"
                      />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title[lang]}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#B2BFB4]">
                    {step.desc[lang]}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Photographic Boardroom Conversion Strip */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-[#131915] border border-white/15 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-5">
              <span className="text-xs font-medium text-[#85DF1A]">
                {UI_COPY.holdingName[lang]}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold leading-snug text-balance">
                {lang === 'ar'
                  ? 'هل تحتاج صياغة عقد، ترخيص شركة، قوائم مالية، أو موافقة أمنية؟'
                  : 'Need contract drafting, corporate permits, financial statements, or security clearance?'}
              </h2>
              <p className="text-sm sm:text-base text-[#B2BFB4] max-w-xl leading-relaxed">
                {lang === 'ar'
                  ? 'وجه طلبك الآن ليتم تخصيص المحامي أو المحاسب أو الباحث المناسب لملفك.'
                  : 'Submit your mandate now to engage the dedicated lawyer, accountant, or researcher for your file.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request' })}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#65B307] hover:bg-[#85DF1A] text-[#0B0F0C] rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{UI_COPY.nav.requestCta[lang]}</span>
                  <DirectionalArrow className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 min-h-[260px] relative">
              <ResilientImage
                src={ASSETS.heroBoardroom}
                alt={
                  lang === 'ar'
                    ? 'قاعة اجتماعات سي دي للاستشارات في القاهرة'
                    : 'CD Consulting boardroom overlooking the Nile'
                }
                className="w-full h-full object-cover"
                fallbackTitle="CD Consulting Boardroom"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#131915] via-transparent to-transparent rtl:bg-gradient-to-l pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
