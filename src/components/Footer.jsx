import React from 'react';
import { Globe, Coffee, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1221] border-t border-[#1c2a42] py-8 sm:py-10 px-4 sm:px-8 relative z-20 shadow-lg mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-8 sm:gap-0">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.5)]"></div>
          <span className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">김진만 입시스케치</span>
        </div>
        
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <a href="https://ipsisketch.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-slate-400 hover:text-white transition-all group">
            <Globe className="w-5 h-5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">홈페이지</span>
          </a>
          <a href="https://cafe.naver.com/ksatspecialist" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-slate-400 hover:text-white transition-all group">
            <Coffee className="w-5 h-5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">네이버 카페</span>
          </a>
          <a href="https://blog.naver.com/teamsen" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-slate-400 hover:text-white transition-all group">
            <BookOpen className="w-5 h-5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">블로그</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
