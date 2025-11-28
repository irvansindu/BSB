'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-6 right-4 sm:right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/60 bg-slate-950/80 text-emerald-100 shadow-[0_18px_60px_rgba(16,185,129,0.45)] backdrop-blur-md hover:bg-emerald-500/15 hover:border-emerald-300 transition-colors"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

export default BackToTop;
