import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass, Target } from 'lucide-react';
import { ASSETS, DISCIPLINE_LABELS, SERVICES, UI_COPY } from '../data/content';
import type { DisciplineId, Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface VisionMissionPageProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

export function VisionMissionPage({ lang, onNavigate }: VisionMissionPageProps) {
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineId>('legal');
  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const connectedServices = SERVICES.filter(
    (s) =>
      s.discipline === selectedDiscipline ||
      s.secondaryDisciplines?.includes(selectedDiscipline),
  );

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Full-Bleed Atmospheric Banner */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.heroBoardroom}
            alt={
              lang === 'ar'
                ? 'مقر سي دي للاستشارات المطلع على نهر النيل'
                : 'CD Consulting Nile-view boardroom'
            }
            className="w-full h-full object-cover opacity-40"
            fallbackTitle="CD Consulting — Vision & Mission"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/70 to-[#0B0F0C]/50 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-3 bg-[#131915]/80 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-2">
              <img
                src={ASSETS.logo}
                alt="CD Consulting Logo"
                className="h-8 w-auto object-contain rounded bg-white p-0.5"
              />
              <span className="text-xs sm:text-sm font-medium text-[#85DF1A]">
                {UI_COPY.holdingName[lang]}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              {UI_COPY.visionPage.pageTitle[lang]}
            </h1>

            <HorizonArc className="max-w-sm" />

            <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed">
              {UI_COPY.visionPage.pageIntro[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-16">
        {/* Vision & Mission Visual Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-4 bg-[#131915]/85 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#65B307]/15 text-[#85DF1A] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {UI_COPY.visionPage.visionTitle[lang]}
              </h2>
              <p className="text-base text-[#B2BFB4] leading-relaxed">
                {UI_COPY.visionPage.visionBody[lang]}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#85DF1A]">
              {lang === 'ar' ? 'نمو مستدام وحماية مؤسسية' : 'Sustainable Growth & Protection'}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="lg:col-span-4 bg-gradient-to-br from-[#19241B] to-[#111712] text-white border border-[#65B307]/40 rounded-2xl p-8 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#65B307] text-[#0B0F0C] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                {UI_COPY.visionPage.missionTitle[lang]}
              </h2>
              <p className="text-base text-white/85 leading-relaxed">
                {UI_COPY.visionPage.missionBody[lang]}
              </p>
            </div>
            <div className="pt-4 border-t border-white/15 text-xs font-medium text-[#85DF1A]">
              {lang === 'ar' ? 'محامون · محاسبون · باحثون' : 'Lawyers · Accountants · Researchers'}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 rounded-2xl overflow-hidden border border-white/10 min-h-[280px]"
          >
            <ResilientImage
              src={ASSETS.executiveLounge}
              alt={
                lang === 'ar'
                  ? 'صالة استقبال المقر التنفيذي لمجموعة كوست أند ديزرت'
                  : 'Executive reception gallery at Coast & Desert Holding Group'
              }
              className="w-full h-full object-cover"
              fallbackTitle="CD Consulting Executive Gallery"
            />
          </motion.div>
        </section>

        {/* Interactive Synergy Matrix (Lawyers x Accountants x Researchers) */}
        <section className="bg-[#131915]/85 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-medium text-[#85DF1A]">
                {lang === 'ar' ? 'الترابط التشغيلي' : 'Operational Synergy'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'ar'
                  ? 'كيف يتقاطع المحامي والمحاسب والباحث في خدماتنا؟'
                  : 'How Our Three Disciplines Connect Across Services'}
              </h2>
            </div>

            <div className="inline-flex flex-wrap gap-1.5 p-1.5 bg-[#0B0F0C] border border-white/10 rounded-xl">
              {(['legal', 'accounting', 'research'] as DisciplineId[]).map((key) => {
                const active = selectedDiscipline === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedDiscipline(key)}
                    className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      active ? 'text-[#0B0F0C] font-semibold' : 'text-[#B2BFB4] hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="synergy-tab"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 bg-[#65B307] rounded-lg"
                      />
                    )}
                    <span className="relative z-10">{DISCIPLINE_LABELS[key][lang]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {connectedServices.map((srv) => (
              <motion.button
                key={`${selectedDiscipline}-${srv.id}`}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => onNavigate({ name: 'service-detail', slug: srv.slug })}
                className="group text-start rounded-xl overflow-hidden border border-white/10 hover:border-[#85DF1A]/60 bg-[#0B0F0C]/80 transition-colors cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#0B0F0C]">
                  <ResilientImage
                    src={srv.image}
                    alt={srv.imageAlt[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackTitle={srv.title[lang]}
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-xs font-mono tabular-nums text-[#85DF1A] font-semibold">
                    {srv.indexNumber}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#85DF1A] transition-colors">
                    {srv.title[lang]}
                  </h3>
                  <p className="text-xs text-[#B2BFB4] line-clamp-2">{srv.summary[lang]}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* 4 Operating Principles */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {UI_COPY.visionPage.pillarsTitle[lang]}
            </h2>
            <button
              type="button"
              onClick={() => onNavigate({ name: 'services', filter: 'all' })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#85DF1A] hover:text-white transition-colors cursor-pointer"
            >
              <span>{UI_COPY.nav.services[lang]}</span>
              <DirectionalArrow className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UI_COPY.visionPage.principles.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.28, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/50 rounded-2xl p-7 space-y-3 transition-colors"
              >
                <span className="text-sm font-mono tabular-nums font-semibold text-[#85DF1A]">
                  {item.num}.
                </span>
                <h3 className="text-lg font-bold text-white">{item.title[lang]}</h3>
                <p className="text-sm text-[#B2BFB4] leading-relaxed">{item.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
