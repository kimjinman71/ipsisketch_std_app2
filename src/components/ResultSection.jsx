import React from 'react';
import { Info } from 'lucide-react';

export default function ResultSection({ result, myPercentile }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 h-full flex flex-col justify-center relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 ${result.bgColor} transition-colors duration-500 opacity-80`} />

      <div className="text-center space-y-4 sm:space-y-6 relative z-10">
        <div>
          <p className="text-slate-400 font-bold mb-1 sm:mb-2 uppercase tracking-widest text-[9px] sm:text-[10px]">분석된 합격 예상 확률</p>
          <div className="flex items-baseline justify-center gap-1 sm:gap-2 min-h-[60px] sm:min-h-[96px]">
            {result.status !== '데이터 대기 중' && result.status !== '입력 오류' && result.status !== '구간 설정 오류' ? (
              <>
                <span className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter ${result.color} transition-colors duration-500 drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)]`} style={result.isLight ? { textShadow: '0 1px 2px rgba(0,0,0,0.15)' } : {}}>
                  {result.probability.toFixed(2)}
                </span>
                <span className={`text-xl sm:text-3xl font-bold ${result.color} opacity-70`}>%</span>
              </>
            ) : (
              <div className="flex gap-1.5 items-center justify-center py-4 sm:py-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-slate-200 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-slate-200 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-slate-200 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            )}
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-slate-50 border border-slate-100">
          <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${result.status === '데이터 대기 중' ? 'bg-slate-300' : 'animate-pulse'} ${result.color}`} style={{ backgroundColor: 'currentColor' }}></span>
          <span className="text-slate-800 font-extrabold tracking-wider text-[11px] sm:text-sm">{result.status}</span>
        </div>

        <div className="pt-4 sm:pt-8 w-full max-w-sm mx-auto px-2 sm:px-4">
          <div className="flex justify-between text-[8px] sm:text-[10px] font-bold text-slate-400 mb-1 sm:mb-2 px-1 uppercase tracking-widest">
            <span>0%</span><span className="hidden sm:inline">위험</span><span className="hidden sm:inline">소신</span><span className="hidden sm:inline">예상</span><span className="hidden sm:inline">안정</span><span>100%</span>
          </div>
          <div className="h-3 sm:h-4 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200 p-0.5">
            <div className="absolute top-0 left-0 h-full w-[20%] border-r border-white/50 z-0"></div>
            <div className="absolute top-0 left-[20%] h-full w-[30%] border-r border-white/50 z-0"></div>
            <div className="absolute top-0 left-[50%] h-full w-[30%] border-r border-white/50 z-0"></div>
            <div className={`h-full rounded-full transition-all duration-1000 ease-out relative z-10 ${result.bgColor} shadow-sm border-r border-black/5`} style={{ width: `${result.probability}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 shadow-inner relative z-10">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-1.5 sm:p-2 bg-white border border-slate-200 rounded-lg shadow-sm mt-0.5">
            <Info className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
          </div>
          <div className="text-[10px] sm:text-xs text-slate-600 leading-relaxed flex items-center min-h-[30px] sm:min-h-[36px]">
            <p className="font-medium">
              {result.status === '데이터 대기 중' ? (
                <span>입력값을 수정하시면 정밀 합격 확률 분석이 시작됩니다.</span>
              ) : (
                <>현재 누백 <strong className="text-slate-900">({myPercentile}%)</strong>은 지원 대학의 <span className={`font-bold ${result.color}`}>{result.status}</span>에 해당합니다. 정교한 로드맵 수립을 권장합니다.</>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
