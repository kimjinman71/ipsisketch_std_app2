import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputSection from './components/InputSection';
import ResultSection from './components/ResultSection';
import Footer from './components/Footer';

export default function App() {
  const [inputs, setInputs] = useState({
    myPercentile: '11.10',
    safePercentile: '4.73',
    expectedPercentile: '6.83',
    beliefPercentile: '9.77'
  });

  const [result, setResult] = useState({
    probability: 0,
    status: '',
    color: '',
    bgColor: '',
    isLight: false
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value !== '' && !isNaN(value)) {
      setInputs(prev => ({ ...prev, [name]: Number(value).toFixed(2) }));
    }
  };

  const handleReset = () => {
    setInputs({ myPercentile: '', safePercentile: '', expectedPercentile: '', beliefPercentile: '' });
    setResult({ probability: 0, status: '데이터 대기 중', color: 'text-slate-400', bgColor: 'bg-slate-100', isLight: false });
    setError('');
  };

  useEffect(() => {
    calculateProbability();
  }, [inputs]);

  const calculateProbability = () => {
    if (inputs.myPercentile === '' || inputs.safePercentile === '' || inputs.expectedPercentile === '' || inputs.beliefPercentile === '') {
      setResult({ probability: 0, status: '데이터 대기 중', color: 'text-slate-400', bgColor: 'bg-slate-100', isLight: false });
      return;
    }

    const i = Number(inputs.myPercentile);
    const n = Number(inputs.safePercentile);
    const o = Number(inputs.expectedPercentile);
    const p = Number(inputs.beliefPercentile);

    if (i < 0 || n < 0 || o < 0 || p < 0 || i > 100 || n > 100 || o > 100 || p > 100) {
      setError('누백은 0에서 100 사이의 숫자여야 합니다.');
      setResult({ probability: 0, status: '입력 오류', color: 'text-slate-400', bgColor: 'bg-slate-100', isLight: false });
      return;
    }

    if (n > o || o > p) {
      setError('기준 누백은 [적정 < 예상 < 소신] 순서로 커져야 합니다.');
      setResult({ probability: 0, status: '구간 설정 오류', color: 'text-slate-400', bgColor: 'bg-slate-100', isLight: false });
      return;
    }

    setError('');
    let prob = 0;

    if (i <= n) prob = 0.8 + (0.9999 - 0.8) * ((n - i) / Math.max(n, 0.0001));
    else if (i <= o) prob = 0.5 + (0.8 - 0.5) * ((o - i) / Math.max(o - n, 0.0001));
    else if (i <= p) prob = 0.2 + (0.5 - 0.2) * ((p - i) / Math.max(p - o, 0.0001));
    else prob = 0.0001 + (0.2 - 0.0001) * ((100 - i) / Math.max(100 - p, 0.0001));

    const probPercent = Math.min(Math.max(prob * 100, 0), 99.99);

    let statusStr = '';
    let colorHex = '';
    let bgHex = '';
    let isLightColor = false;

    if (probPercent >= 80) {
      statusStr = '적정 안정권'; colorHex = 'text-[#007800]'; bgHex = 'bg-[#007800]';
    } else if (probPercent >= 50) {
      statusStr = '예상 합격권'; colorHex = 'text-[#96FFC8]'; bgHex = 'bg-[#96FFC8]'; isLightColor = true;
    } else if (probPercent >= 20) {
      statusStr = '소신 지원권'; colorHex = 'text-[#FFFF00]'; bgHex = 'bg-[#FFFF00]'; isLightColor = true;
    } else {
      statusStr = '소신 미만 (위험)'; colorHex = 'text-rose-600'; bgHex = 'bg-rose-500';
    }

    setResult({ probability: probPercent, status: statusStr, color: colorHex, bgColor: bgHex, isLight: isLightColor });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col text-slate-900 transition-colors duration-500 overflow-x-hidden">
      <main className="flex-1 w-full relative z-10 pt-4 sm:pt-8 px-4 sm:px-6 pb-12">
        <div className="max-w-4xl w-full mx-auto space-y-4 sm:space-y-8">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            <div className="lg:col-span-5 space-y-4">
              <InputSection 
                inputs={inputs} 
                handleInputChange={handleInputChange} 
                handleBlur={handleBlur} 
                error={error} 
                handleReset={handleReset} 
              />
            </div>
            <div className="lg:col-span-7">
              <ResultSection result={result} myPercentile={inputs.myPercentile} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
