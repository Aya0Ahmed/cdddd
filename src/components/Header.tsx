import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import { UI_COPY } from '../data/content';
import type { Language, PageRoute } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  route: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export function Header({ lang, onToggleLang, route, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: PageRoute['name']; label: string; target: PageRoute }[] = [
    { id: 'home', label: UI_COPY.nav.home[lang], target: { name: 'home' } },
    { id: 'vision', label: UI_COPY.nav.vision[lang], target: { name: 'vision' } },
    { id: 'services', label: UI_COPY.nav.services[lang], target: { name: 'services', filter: 'all' } },
    { id: 'creators', label: UI_COPY.nav.creators[lang], target: { name: 'creators' } },
  ];

  const isNavActive = (id: PageRoute['name']) => {
    if (id === 'services' && route.name === 'service-detail') return true;
    return route.name === id;
  };

  const handleNavClick = (target: PageRoute) => {
    setMobileOpen(false);
    onNavigate(target);
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-[#0B0F0C]/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1280px] mx-auto h-full px-4 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick({ name: 'home' })}
          className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85DF1A] rounded"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-white text-[#0B0F0C] text-xs font-extrabold tracking-tighter">
            <span className="text-[#43940A]">C</span>D
          </span>
          <span className="font-display">{UI_COPY.brandShort}</span>
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = isNavActive(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.target)}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85DF1A] rounded ${
                  active ? 'text-[#85DF1A] font-semibold' : 'text-[#B2BFB4] hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="header-active-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-[#85DF1A] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language toggle + Single Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs sm:text-sm font-medium text-[#B2BFB4] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85DF1A] rounded"
          >
            <Globe className="w-4 h-4 text-[#85DF1A]" />
            <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick({ name: 'request' })}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] active:scale-[0.98] transition-all duration-150 rounded-lg whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85DF1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F0C]"
          >
            {UI_COPY.nav.requestCta[lang]}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#131915] border-b border-white/10 px-4 py-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isNavActive(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.target)}
                    className={`w-full text-start px-3 py-3 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#65B307]/15 text-[#85DF1A] font-semibold'
                        : 'text-[#F4F7F4] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => handleNavClick({ name: 'request' })}
                className="mt-2 w-full px-4 py-3 text-sm font-semibold text-[#0B0F0C] bg-[#65B307] hover:bg-[#85DF1A] rounded-lg text-center transition-colors cursor-pointer"
              >
                {UI_COPY.nav.requestCta[lang]}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
