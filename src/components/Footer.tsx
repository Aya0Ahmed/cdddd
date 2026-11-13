import { ASSETS, UI_COPY } from '../data/content';
import type { Language, PageRoute } from '../types';
import { ResilientImage } from './ResilientImage';

interface FooterProps {
  lang: Language;
  onNavigate: (route: PageRoute) => void;
}

export function Footer({ lang, onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#080B09] border-t border-white/10 mt-24 text-[#F4F7F4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Official Brand Logo Block */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-block bg-white rounded-xl p-3 max-w-[230px] shadow-lg">
              <ResilientImage
                src={ASSETS.logo}
                alt="CD Consulting — Coast & Desert Holding Group Logo"
                className="w-full h-auto object-contain"
                fallbackTitle="CD Consulting"
              />
            </div>
            <p className="text-sm text-[#B2BFB4] leading-relaxed max-w-md">
              {UI_COPY.footer.tagline[lang]}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold text-white">
              {lang === 'ar' ? 'صفحات الموقع' : 'Site Pages'}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#B2BFB4]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'home' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.home[lang]}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'vision' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.vision[lang]}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'services', filter: 'all' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.services[lang]}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'creators' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {UI_COPY.nav.creators[lang]}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Action & Specializations */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">
              {lang === 'ar' ? 'التخصصات المتاحة' : 'Practice Divisions'}
            </h3>
            <ul className="space-y-2 text-sm text-[#B2BFB4]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request', preselectedDiscipline: 'legal' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'اطلب محامياً' : 'Request Lawyers'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request', preselectedDiscipline: 'accounting' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'اطلب محاسباً' : 'Request Accountants'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ name: 'request', preselectedDiscipline: 'research' })}
                  className="hover:text-[#85DF1A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'اطلب باحثاً' : 'Request Researchers'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#B2BFB4]">
          <span>{UI_COPY.footer.rights[lang]}</span>
          <span>{UI_COPY.holdingName[lang]}</span>
        </div>
      </div>
    </footer>
  );
}
