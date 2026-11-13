import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calculator, Check, FileSearch, Scale } from 'lucide-react';
import { ASSETS, CREATORS, SPECIALIST_ROLES, UI_COPY } from '../data/content';
import type { DisciplineId, Language, PageRoute } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface CreatorsPageProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

const DIVISION_ICON: Record<DisciplineId, typeof Scale> = {
  legal: Scale,
  accounting: Calculator,
  research: FileSearch,
};

export function CreatorsPage({ lang, onNavigate }: CreatorsPageProps) {
  const [selectedTeam, setSelectedTeam] = useState<DisciplineId[]>(['legal', 'accounting']);
  const DirectionalArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const toggleRole = (id: DisciplineId) => {
    setSelectedTeam((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id],
    );
  };

  return (
    <div className="space-y-16">
      {/* Executive Leadership Photographic Banner */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.executiveTeam}
            alt={
              lang === 'ar'
                ? 'فريق القيادة التنفيذية والشركاء المؤسسون لسي دي للاستشارات'
                : 'Founding partners walking through CD Consulting modern sunlit atrium'
            }
            className="w-full h-full object-cover opacity-45"
            fallbackTitle="CD Consulting Leadership"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/70 to-[#0B0F0C]/45 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42 }}
            className="max-w-3xl space-y-5"
          >
            <span className="text-xs sm:text-sm font-medium text-[#85DF1A]">
              {UI_COPY.holdingName[lang]}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              {UI_COPY.creatorsPage.pageTitle[lang]}
            </h1>
            <HorizonArc className="max-w-sm" />
            <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed">
              {UI_COPY.creatorsPage.pageIntro[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-16">
        {/* Founding Partners / Creators Grid */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              {UI_COPY.creatorsPage.teamHeading[lang]}
            </h2>
            <span className="text-xs sm:text-sm text-[#B2BFB4]">
              {lang === 'ar'
                ? 'قيادة مشتركة لقطاعات القانون والمحاسبة والأبحاث'
                : 'Joint Leadership Across Legal, Accounting & Research'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CREATORS.map((creator, idx) => (
              <motion.article
                key={creator.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-colors duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#0B0F0C] border border-[#65B307]/40 text-white font-bold text-lg flex items-center justify-center shrink-0">
                        <span className="text-[#85DF1A]">{creator.initials[0]}</span>
                        <span>{creator.initials[1]}</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {creator.name[lang]}
                        </h3>
                        <p className="text-sm font-medium text-[#85DF1A]">{creator.role[lang]}</p>
                      </div>
                    </div>
                    <div className="text-end shrink-0">
                      <span className="text-base font-bold tabular-nums text-white">
                        {creator.experienceYears}
                      </span>
                      <div className="text-[11px] text-[#B2BFB4]">
                        {UI_COPY.creatorsPage.yearsLabel[lang]}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-[#B2BFB4]">
                    <span>{creator.divisionLabel[lang]}</span>
                  </div>

                  <p className="text-sm text-[#B2BFB4] leading-relaxed">{creator.bio[lang]}</p>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#F4F7F4]/85 flex flex-wrap items-center gap-2">
                    {creator.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center gap-2">
                        <span>{spec[lang]}</span>
                        {sIdx < creator.specialties.length - 1 && (
                          <span aria-hidden="true" className="text-[#B2BFB4]">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({
                        name: 'request',
                        preselectedDiscipline:
                          creator.division === 'executive' ? 'legal' : creator.division,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#85DF1A] hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{UI_COPY.creatorsPage.consultBtn[lang]}</span>
                    <DirectionalArrow className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Interactive "Assemble Your Multidisciplinary Team" + Visual Division Cards */}
        <section className="space-y-8">
          <div className="bg-gradient-to-br from-[#19241B] to-[#111712] border border-[#65B307]/40 text-white rounded-2xl p-7 sm:p-10 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-medium text-[#85DF1A]">
                  {lang === 'ar' ? 'تشكيل فريق مخصص' : 'Custom Mandate Task Force'}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">
                  {lang === 'ar'
                    ? 'اختر الخبراء المطلوبين لملفك (محامي · محاسب · باحث)'
                    : 'Assemble Your Advisory Team (Lawyers · Accountants · Researchers)'}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  onNavigate({
                    name: 'request',
                    preselectedDiscipline: selectedTeam[0] || 'legal',
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#65B307] hover:bg-[#85DF1A] text-[#0B0F0C] rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {lang === 'ar'
                    ? `توجيه الطلب لـ (${selectedTeam.length}) تخصصات`
                    : `Request Selected (${selectedTeam.length}) Disciplines`}
                </span>
                <DirectionalArrow className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SPECIALIST_ROLES.map((role) => {
                const Icon = DIVISION_ICON[role.id];
                const isSelected = selectedTeam.includes(role.id);
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => toggleRole(role.id)}
                    className={`text-start p-5 rounded-xl border transition-all duration-150 cursor-pointer flex items-start justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#65B307]/15 border-[#85DF1A]'
                        : 'bg-[#0B0F0C]/60 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#85DF1A]" />
                        <span className="font-bold text-base text-white">{role.title[lang]}</span>
                      </div>
                      <p className="text-xs text-[#B2BFB4] leading-relaxed">{role.subtitle[lang]}</p>
                    </div>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-[#65B307] text-[#0B0F0C]' : 'border border-white/30'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photo-Backed Specialist Divisions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SPECIALIST_ROLES.map((role, idx) => {
              const Icon = DIVISION_ICON[role.id];
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.28, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group bg-[#131915]/85 backdrop-blur-md border border-white/10 hover:border-[#85DF1A]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#0B0F0C]">
                      <ResilientImage
                        src={role.image}
                        alt={role.imageAlt[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        fallbackTitle={role.title[lang]}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-transparent to-transparent" />
                      <div className="absolute bottom-3 inset-x-4 flex items-center gap-2 text-white">
                        <Icon className="w-4 h-4 text-[#85DF1A]" />
                        <span className="text-sm font-bold">{role.title[lang]}</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <ul className="space-y-2 text-sm text-[#B2BFB4]">
                        {role.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="text-[#85DF1A] font-bold" aria-hidden="true">
                              —
                            </span>
                            <span>{cap[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => onNavigate({ name: 'request', preselectedDiscipline: role.id })}
                      className="w-full py-2.5 px-4 text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-lg transition-colors cursor-pointer"
                    >
                      {role.pluralTitle[lang]}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
