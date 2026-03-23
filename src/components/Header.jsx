import React from 'react';

export default function Header() {
  return (
    <div className="relative bg-[#0b1221] rounded-xl sm:rounded-2xl py-6 sm:py-8 px-4 sm:px-8 shadow-xl border border-[#1c2a42] flex flex-col items-center text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-1 sm:mb-2 whitespace-nowrap">
        고속성장분석기 합격률 계산기
      </h1>
      <p className="text-slate-400 text-[8.5px] min-[360px]:text-[9px] min-[390px]:text-[10px] min-[420px]:text-[11px] sm:text-xs md:text-sm font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis w-full">
        선형 보간법을 활용하여 누적 백분위(누백) 기반의 정밀한 합격 확률을 산출합니다.
      </p>
    </div>
  );
}
