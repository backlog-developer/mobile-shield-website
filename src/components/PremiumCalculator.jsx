import React, { useState, useEffect } from 'react';
import { Smartphone, Laptop, Tablet } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function PremiumCalculator({ triggerNotification }) {
  const [deviceType, setDeviceType] = useState('smartphone');
  const [deviceValue, setDeviceValue] = useState(1000);
  const [planTier, setPlanTier] = useState('comprehensive');
  const [premium, setPremium] = useState(8.99);

  useEffect(() => {
    let factor = 0.007; 
    if (deviceType === 'laptop') factor = 0.009;
    if (deviceType === 'tablet') factor = 0.006;

    let baseRate = deviceValue * factor;
    
    if (planTier === 'comprehensive') {
      baseRate += 3.50;
    }

    const calculatedPremium = Math.max(4.99, baseRate).toFixed(2);
    setPremium(parseFloat(calculatedPremium));
  }, [deviceType, deviceValue, planTier]);

  const updatedCompetitorData = [
    { name: 'Standard Carrier', cost: parseFloat((premium * 1.8).toFixed(2)), fill: '#cbd5e1' },
    { name: 'OEM Care Package', cost: parseFloat((premium * 1.4).toFixed(2)), fill: '#94a3b8' },
    { name: 'ShieldMobile', cost: premium, fill: '#4f46e5' },
  ];

  return (
    <div className="py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Descriptive headers */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-extrabold uppercase tracking-widest text-xs mb-3">Premium Engine</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Personalize Your Premium</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Input your electronics parameters below. Adjust your tier coverage instantly to see customized rate estimations.
          </p>
        </div>

        {}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-xl shadow-slate-100 border border-slate-100 space-y-8">
            
            {/* Step 1: Device Type */}
            <div className="space-y-4">
              <label className="text-sm font-extrabold text-slate-600 uppercase tracking-widest">1. Device Model Class</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'smartphone', label: 'Smartphone', icon: Smartphone },
                  { id: 'laptop', label: 'Laptop', icon: Laptop },
                  { id: 'tablet', label: 'Tablet', icon: Tablet },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = deviceType === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setDeviceType(item.id)}
                      className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center space-y-2.5 transition-all cursor-pointer ${active ? 'border-indigo-600 bg-indigo-50/40 text-indigo-700 font-semibold' : 'border-slate-100 hover:bg-slate-50 text-slate-500 font-normal'}`}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-extrabold text-slate-600 uppercase tracking-widest">2. Estimated Hardware Value</label>
                <span className="text-indigo-600 font-black text-lg">${deviceValue}</span>
              </div>
              <input 
                type="range" 
                min="200" 
                max="2500" 
                step="100"
                value={deviceValue} 
                onChange={(e) => setDeviceValue(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-slate-400 font-semibold px-1">
                <span>$200</span>
                <span>$1,200</span>
                <span>$2,500</span>
              </div>
            </div>

            {/* Step 3: Tiers */}
            <div className="space-y-4">
              <label className="text-sm font-extrabold text-slate-600 uppercase tracking-widest">3. Protection Tier Limit</label>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPlanTier('standard')}
                  className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${planTier === 'standard' ? 'border-indigo-600 bg-indigo-50/40' : 'border-slate-100 bg-white hover:bg-slate-50'}`}
                >
                  <p className="font-bold text-slate-900 text-base">Standard Plan</p>
                  <p className="text-slate-400 text-xs mt-1">Accidental drops + spills + shattered screens.</p>
                </button>
                <button
                  onClick={() => setPlanTier('comprehensive')}
                  className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${planTier === 'comprehensive' ? 'border-indigo-600 bg-indigo-50/40' : 'border-slate-100 bg-white hover:bg-slate-50'}`}
                >
                  <p className="font-bold text-slate-900 text-base">Comprehensive Plan</p>
                  <p className="text-indigo-600 text-xs mt-1 font-semibold">Standard features + Theft & Loss support.</p>
                </button>
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-xl shadow-slate-100 border border-slate-100 flex flex-col justify-between h-full min-h-[480px]">
            <div className="text-center space-y-2">
              <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Your Personalized Estimate</p>
              <div className="inline-flex items-baseline justify-center text-indigo-600">
                <span className="text-3xl font-extrabold">$</span>
                <span className="text-6xl font-black tracking-tight">{premium}</span>
                <span className="text-slate-500 font-semibold text-lg">/mo</span>
              </div>
            </div>

            {/* Cost chart comparison */}
            <div className="h-56 mt-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center mb-4">Competitor Cost Comparison</p>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={updatedCompetitorData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} unit="$" />
                  <Tooltip formatter={(value) => [`$${value}/mo`, 'Cost']} cursor={{ fill: 'rgba(99, 102, 241, 0.05)' }} />
                  <Bar dataKey="cost" radius={[8, 8, 0, 0]} barSize={40}>
                    {updatedCompetitorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <button 
              onClick={() => triggerNotification(`Checking out with monthly rate of $${premium}...`)}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-indigo-600 transition shadow-lg mt-6 cursor-pointer"
            >
              Protect My Device
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}