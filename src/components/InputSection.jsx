import React from 'react';
import { Calculator, TrendingUp, AlertCircle, RefreshCw } from 'lucide-react';

export default function InputSection({ inputs, handleInputChange, handleBlur, error, handleReset }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 h-full">
      <div className="flex items-center gap-2 mb-4 sm:mb-6 border-b border-slate-100 pb-3 sm:pb-4">
        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
        <h2 className="text-base sm:text-lg font-bold text-slate-800">누적백분위 입력</h2>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="bg-red-50/50 p-4 sm:p-5 rounded-xl border border-red-600 shadow-sm relative group">
          <label className="relative block text-[10px] sm:text-xs font-extrabold text-red-700/70 mb-1 sm:mb-2 uppercase tracking-wider">
            나의 누백 (%)
          </label>
          <input
            type="number"
            name="myPercentile"
            value={inputs.myPercentile}
            onChange={handleInputChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="0.00"
            className="w-full px-0 py-1 bg-transparent border-0 border-b-2 border-red-600/20 focus:ring-0 focus:border-red-600 transition-colors font-extrabold text-2xl sm:text-4xl text-slate-900"
          />
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            대학 지원선 기준 누백
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-[#007800] p-2 sm:p-3 rounded-lg border border-[#007800] shadow-sm flex flex-col items-center">
              <label className="text-[9px] sm:text-[11px] font-extrabold text-white/90 mb-1 uppercase tracking-tight">적정</label>
              <input type="number" name="safePercentile" value={inputs.safePercentile} onChange={handleInputChange} onBlur={handleBlur} step="0.01" placeholder="0.00" className="w-full px-1 py-1 text-center bg-transparent border-0 focus:ring-0 text-sm sm:text-lg font-extrabold transition-colors text-white placeholder:text-white/30" />
            </div>
            <div className="bg-[#96FFC8] p-2 sm:p-3 rounded-lg border border-[#96FFC8] shadow-sm flex flex-col items-center">
              <label className="text-[9px] sm:text-[11px] font-extrabold text-slate-800/80 mb-1 uppercase tracking-tight">예상</label>
              <input type="number" name="expectedPercentile" value={inputs.expectedPercentile} onChange={handleInputChange} onBlur={handleBlur} step="0.01" placeholder="0.00" className="w-full px-1 py-1 text-center bg-transparent border-0 focus:ring-0 text-sm sm:text-lg font-extrabold transition-colors text-slate-900 placeholder:text-slate-900/20" />
            </div>
            <div className="bg-[#FFFF00] p-2 sm:p-3 rounded-lg border border-[#FFFF00] shadow-sm flex flex-col items-center">
              <label className="text-[9px] sm:text-[11px] font-extrabold text-slate-800/80 mb-1 uppercase tracking-tight">소신</label>
              <input type="number" name="beliefPercentile" value={inputs.beliefPercentile} onChange={handleInputChange} onBlur={handleBlur} step="0.01" placeholder="0.00" className="w-full px-1 py-1 text-center bg-transparent border-0 focus:ring-0 text-sm sm:text-lg font-extrabold transition-colors text-slate-900 placeholder:text-slate-900/20" />
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 text-rose-600 text-[10px] sm:text-xs bg-rose-50 border border-rose-100 p-2 sm:p-3 rounded-lg mt-1 animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
              <p className="font-semibold leading-tight">{error}</p>
            </div>
          )}
        </div>

        <div className="pt-3 sm:pt-5 border-t border-slate-100">
          <button onClick={handleReset} className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 transition-all text-xs sm:text-sm font-bold shadow-sm">
            <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
            데이터 초기화
          </button>
        </div>
      </div>
    </div>
  );
}
