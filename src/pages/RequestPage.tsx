import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, FileText, Users } from 'lucide-react';
import { ASSETS, SERVICES, SPECIALIST_ROLES, UI_COPY } from '../data/content';
import type { DisciplineId, Language, SubmittedRequest } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { HorizonArc, ParallaxFrame } from '../components/MotionPrimitives';

interface RequestPageProps {
  lang: Language;
  preselectedService?: string;
  preselectedDiscipline?: DisciplineId;
  preselectedSubScope?: string;
  submittedRequests: SubmittedRequest[];
  onAddRequest: (req: SubmittedRequest) => void;
}

export function RequestPage({
  lang,
  preselectedService,
  preselectedDiscipline,
  preselectedSubScope,
  submittedRequests,
  onAddRequest,
}: RequestPageProps) {
  const initialMode: 'service' | 'specialist' =
    preselectedDiscipline && !preselectedService ? 'specialist' : 'service';

  const [requestMode, setRequestMode] = useState<'service' | 'specialist'>(initialMode);
  const [serviceId, setServiceId] = useState<string>(preselectedService || SERVICES[0].id);
  const [selectedSubScopes, setSelectedSubScopes] = useState<string[]>(
    preselectedSubScope ? [preselectedSubScope] : [],
  );
  const [specialistType, setSpecialistType] = useState<DisciplineId | 'integrated'>(
    preselectedDiscipline || 'legal',
  );
  const [urgency, setUrgency] = useState<'standard' | 'priority' | 'urgent'>('standard');

  const [clientName, setClientName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [latestTicket, setLatestTicket] = useState<SubmittedRequest | null>(null);

  const activeService = SERVICES.find((s) => s.id === serviceId) ?? SERVICES[0];
  const activeSpecialist = SPECIALIST_ROLES.find((r) => r.id === specialistType);

  const previewImage =
    requestMode === 'service'
      ? activeService.image
      : activeSpecialist?.image ?? ASSETS.heroBoardroom;

  const previewTitle =
    requestMode === 'service'
      ? activeService.title[lang]
      : specialistType === 'integrated'
        ? UI_COPY.requestPage.labels.integratedTeam[lang]
        : activeSpecialist?.title[lang] ?? '';

  const handleServiceChange = (newId: string) => {
    setServiceId(newId);
    setSelectedSubScopes([]);
  };

  const toggleSubScope = (subId: string) => {
    setSelectedSubScopes((prev) =>
      prev.includes(subId) ? prev.filter((id) => id !== subId) : [...prev, subId],
    );
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!clientName.trim()) {
      nextErrors.clientName = UI_COPY.requestPage.validation.nameRequired[lang];
    }
    if (!phone.trim() || phone.replace(/[^0-9+]/g, '').length < 8) {
      nextErrors.phone = UI_COPY.requestPage.validation.phoneRequired[lang];
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = UI_COPY.requestPage.validation.emailInvalid[lang];
    }
    if (!notes.trim()) {
      nextErrors.notes = UI_COPY.requestPage.validation.notesRequired[lang];
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ticket: SubmittedRequest = {
      referenceId: `CD-2026-${randomNum}`,
      createdAt: new Date().toLocaleTimeString(lang === 'ar' ? 'ar-EG' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      clientName: clientName.trim(),
      organization: organization.trim(),
      email: email.trim(),
      phone: phone.trim(),
      requestMode,
      serviceId,
      subScopes: selectedSubScopes,
      specialistType,
      urgency,
      notes: notes.trim(),
    };

    onAddRequest(ticket);
    setLatestTicket(ticket);
    setNotes('');
    setErrors({});
  };

  const getServiceTitle = (id: string) =>
    SERVICES.find((s) => s.id === id)?.title[lang] ?? id;

  const getSpecialistTitle = (type: DisciplineId | 'integrated') => {
    if (type === 'integrated') {
      return UI_COPY.requestPage.labels.integratedTeam[lang];
    }
    return SPECIALIST_ROLES.find((r) => r.id === type)?.title[lang] ?? type;
  };

  return (
    <div className="space-y-12">
      {/* Photographic Request Banner */}
      <section className="relative bg-[#0B0F0C] text-white overflow-hidden border-b border-white/10">
        <ParallaxFrame className="absolute inset-0">
          <ResilientImage
            src={ASSETS.heroBoardroom}
            alt={
              lang === 'ar'
                ? 'مكتب استقبال الطلبات الاستشارية في سي دي للاستشارات'
                : 'CD Consulting mandate intake boardroom'
            }
            className="w-full h-full object-cover opacity-35"
            fallbackTitle="CD Consulting Request"
          />
        </ParallaxFrame>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-[#0B0F0C]/75 to-[#0B0F0C]/55 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-14 space-y-4">
          <span className="text-xs sm:text-sm font-medium text-[#85DF1A]">
            {UI_COPY.holdingName[lang]}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
            {UI_COPY.requestPage.pageTitle[lang]}
          </h1>
          <HorizonArc className="max-w-sm" />
          <p className="text-base sm:text-lg text-[#B2BFB4] leading-relaxed max-w-3xl">
            {UI_COPY.requestPage.pageIntro[lang]}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Interactive Request Form */}
        <div className="lg:col-span-8 bg-[#131915]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-9">
          <AnimatePresence mode="wait">
            {latestTicket ? (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="py-8 space-y-6"
              >
                <div className="w-12 h-12 rounded-full bg-[#65B307]/20 text-[#85DF1A] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {UI_COPY.requestPage.successTitle[lang]}
                  </h2>
                  <p className="text-sm sm:text-base text-[#B2BFB4] max-w-xl">
                    {UI_COPY.requestPage.successDesc[lang]}
                  </p>
                </div>

                <div className="bg-[#0B0F0C] border border-white/10 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-[#B2BFB4]">{UI_COPY.requestPage.refLabel[lang]}</div>
                    <div className="font-mono font-bold tabular-nums text-[#85DF1A] mt-0.5">
                      {latestTicket.referenceId}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#B2BFB4]">
                      {latestTicket.requestMode === 'service'
                        ? UI_COPY.requestPage.labels.selectService[lang]
                        : UI_COPY.requestPage.labels.selectSpecialist[lang]}
                    </div>
                    <div className="font-semibold text-white mt-0.5">
                      {latestTicket.requestMode === 'service'
                        ? getServiceTitle(latestTicket.serviceId)
                        : getSpecialistTitle(latestTicket.specialistType)}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLatestTicket(null)}
                  className="px-5 py-2.5 text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-lg transition-colors cursor-pointer"
                >
                  {UI_COPY.requestPage.newRequestBtn[lang]}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="request-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-7"
              >
                {/* Mode Toggle: Specific Service vs Specialist Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 bg-[#0B0F0C] border border-white/10 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setRequestMode('service')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                      requestMode === 'service'
                        ? 'bg-[#65B307] text-[#0B0F0C]'
                        : 'text-[#B2BFB4] hover:text-white'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>{UI_COPY.requestPage.modeService[lang]}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRequestMode('specialist')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                      requestMode === 'specialist'
                        ? 'bg-[#65B307] text-[#0B0F0C]'
                        : 'text-[#B2BFB4] hover:text-white'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>{UI_COPY.requestPage.modeSpecialist[lang]}</span>
                  </button>
                </div>

                {/* Dynamic Selection Block */}
                {requestMode === 'service' ? (
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="service-select"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {UI_COPY.requestPage.labels.selectService[lang]}
                      </label>
                      <select
                        id="service-select"
                        value={serviceId}
                        onChange={(e) => handleServiceChange(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-[#0B0F0C] border border-white/15 focus:border-[#85DF1A] focus:outline-none rounded-xl text-white"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id} className="bg-[#131915] text-white">
                            {s.indexNumber}. {s.title[lang]}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sub-Scopes Checkboxes */}
                    <div className="space-y-2.5">
                      <span className="block text-sm font-semibold text-white">
                        {UI_COPY.requestPage.labels.selectSubScopes[lang]}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeService.subScopes.map((sub) => {
                          const checked = selectedSubScopes.includes(sub.id);
                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => toggleSubScope(sub.id)}
                              className={`text-start px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border transition-colors cursor-pointer ${
                                checked
                                  ? 'bg-[#65B307]/15 border-[#85DF1A] text-[#85DF1A] font-semibold'
                                  : 'bg-[#0B0F0C]/70 border-white/10 text-[#B2BFB4] hover:text-white hover:border-white/25'
                              }`}
                            >
                              {sub.title[lang]}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <span className="block text-sm font-semibold text-white">
                      {UI_COPY.requestPage.labels.selectSpecialist[lang]}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SPECIALIST_ROLES.map((role) => {
                        const selected = specialistType === role.id;
                        return (
                          <button
                            key={role.id}
                            type="button"
                            onClick={() => setSpecialistType(role.id)}
                            className={`text-start p-4 rounded-xl border transition-colors cursor-pointer ${
                              selected
                                ? 'bg-[#65B307]/15 border-[#85DF1A]'
                                : 'bg-[#0B0F0C]/70 border-white/10 hover:border-white/25'
                            }`}
                          >
                            <div className="text-sm font-bold text-white">
                              {role.title[lang]}
                            </div>
                            <div className="text-xs text-[#B2BFB4] mt-1">{role.subtitle[lang]}</div>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setSpecialistType('integrated')}
                        className={`text-start p-4 rounded-xl border transition-colors cursor-pointer ${
                          specialistType === 'integrated'
                            ? 'bg-[#65B307]/15 border-[#85DF1A]'
                            : 'bg-[#0B0F0C]/70 border-white/10 hover:border-white/25'
                        }`}
                      >
                        <div className="text-sm font-bold text-white">
                          {UI_COPY.requestPage.labels.integratedTeam[lang]}
                        </div>
                        <div className="text-xs text-[#B2BFB4] mt-1">
                          {lang === 'ar'
                            ? 'تغطية شاملة للعقود والتمويل والتراخيص'
                            : 'Full legal, financial & regulatory coverage'}
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-white/10">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-sm font-semibold text-white mb-1.5"
                    >
                      {UI_COPY.requestPage.labels.clientName[lang]} *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#0B0F0C] border border-white/15 focus:border-[#85DF1A] focus:outline-none rounded-xl text-white placeholder:text-[#B2BFB4]/50"
                    />
                    {errors.clientName && (
                      <p className="text-xs text-red-400 mt-1">{errors.clientName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="client-org"
                      className="block text-sm font-semibold text-white mb-1.5"
                    >
                      {UI_COPY.requestPage.labels.organization[lang]}
                    </label>
                    <input
                      id="client-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#0B0F0C] border border-white/15 focus:border-[#85DF1A] focus:outline-none rounded-xl text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block text-sm font-semibold text-white mb-1.5"
                    >
                      {UI_COPY.requestPage.labels.phone[lang]} *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      dir="ltr"
                      placeholder="+20 100 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#0B0F0C] border border-white/15 focus:border-[#85DF1A] focus:outline-none rounded-xl text-white text-start placeholder:text-[#B2BFB4]/40"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-sm font-semibold text-white mb-1.5"
                    >
                      {UI_COPY.requestPage.labels.email[lang]} *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      dir="ltr"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#0B0F0C] border border-white/15 focus:border-[#85DF1A] focus:outline-none rounded-xl text-white text-start placeholder:text-[#B2BFB4]/40"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Priority */}
                <div>
                  <label
                    htmlFor="urgency-select"
                    className="block text-sm font-semibold text-white mb-1.5"
                  >
                    {UI_COPY.requestPage.labels.urgency[lang]}
                  </label>
                  <select
                    id="urgency-select"
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value as 'standard' | 'priority' | 'urgent')}
                    className="w-full px-4 py-2.5 text-sm bg-[#0B0F0C] border border-white/15 focus:border-[#85DF1A] focus:outline-none rounded-xl text-white"
                  >
                    <option value="standard" className="bg-[#131915]">
                      {UI_COPY.requestPage.labels.urgencyStandard[lang]}
                    </option>
                    <option value="priority" className="bg-[#131915]">
                      {UI_COPY.requestPage.labels.urgencyPriority[lang]}
                    </option>
                    <option value="urgent" className="bg-[#131915]">
                      {UI_COPY.requestPage.labels.urgencyUrgent[lang]}
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="request-notes"
                    className="block text-sm font-semibold text-white mb-1.5"
                  >
                    {UI_COPY.requestPage.labels.notes[lang]} *
                  </label>
                  <textarea
                    id="request-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={
                      lang === 'ar'
                        ? 'اشرح بإيجاز طبيعة العقد، الترخيص، القوائم المالية، أو الاستشارة المطلوبة...'
                        : 'Briefly describe your contract, licensing, financial statement, or advisory mandate...'
                    }
                    className="w-full px-4 py-3 text-sm bg-[#0B0F0C] border border-white/15 focus:border-[#85DF1A] focus:outline-none rounded-xl resize-y text-white placeholder:text-[#B2BFB4]/50"
                  />
                  {errors.notes && <p className="text-xs text-red-400 mt-1">{errors.notes}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] active:scale-[0.99] rounded-xl transition-all cursor-pointer"
                >
                  {UI_COPY.requestPage.labels.submit[lang]}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Right/End Live Mandate Visual Summary & Session Requests */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#131915]/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
            <div className="relative aspect-[16/10] bg-[#0B0F0C] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={previewImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full"
                >
                  <ResilientImage
                    src={previewImage}
                    alt={previewTitle}
                    className="w-full h-full object-cover"
                    fallbackTitle={previewTitle}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#131915] via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-4 text-white">
                <div className="text-[11px] font-medium text-[#85DF1A]">
                  {lang === 'ar' ? 'النطاق المحدد حالياً' : 'Active Selection'}
                </div>
                <div className="text-sm font-bold leading-snug">{previewTitle}</div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-base font-bold text-white">
                {lang === 'ar' ? 'كيف نعمل على طلبك؟' : 'How Your Request Is Handled'}
              </h2>
              <ol className="space-y-3 text-sm text-[#B2BFB4]">
                <li className="flex gap-3">
                  <span className="font-mono tabular-nums text-[#85DF1A] font-bold">01.</span>
                  <span>
                    {lang === 'ar'
                      ? 'فرز فوري وتوجيه الملف للقطاع القانوني أو المحاسبي أو البحثي.'
                      : 'Immediate triage to Legal, Accounting, or Regulatory Research lead.'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono tabular-nums text-[#85DF1A] font-bold">02.</span>
                  <span>
                    {lang === 'ar'
                      ? 'إرسال قائمة المستندات المطلوبة والجدول الزمني الدقيق.'
                      : 'Delivery of exact document checklist and milestone schedule.'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono tabular-nums text-[#85DF1A] font-bold">03.</span>
                  <span>
                    {lang === 'ar'
                      ? 'بدء التنفيذ والتمثيل الرسمي مع تحديثات مرحلية واضحة.'
                      : 'Execution & authority liaison with transparent milestone updates.'}
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {submittedRequests.length > 0 && (
            <div className="bg-[#131915]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white">
                {UI_COPY.requestPage.recentHeading[lang]}
              </h3>
              <div className="space-y-3">
                {submittedRequests.map((item) => (
                  <div
                    key={item.referenceId}
                    className="p-3.5 bg-[#0B0F0C] border border-white/10 rounded-xl text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold tabular-nums text-[#85DF1A]">
                        {item.referenceId}
                      </span>
                      <span className="text-[#B2BFB4] tabular-nums">{item.createdAt}</span>
                    </div>
                    <div className="font-semibold text-white">
                      {item.requestMode === 'service'
                        ? getServiceTitle(item.serviceId)
                        : getSpecialistTitle(item.specialistType)}
                    </div>
                    <div className="text-[#B2BFB4]">{item.clientName}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
