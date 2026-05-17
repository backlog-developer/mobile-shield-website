import React from 'react';
import { ShieldAlert, Droplet, Monitor, Trash2, Globe, Clock, Zap } from 'lucide-react';

const COVERAGE_ITEMS = [
  {
    icon: ShieldAlert,
    title: "Accidental Damage",
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500",
    description: "Protection against everyday impacts, catastrophic structural drops, and hardware cosmetic fractures."
  },
  {
    icon: Droplet,
    title: "Liquid Spills",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500",
    description: "Comprehensive recovery for internal circuitry damaged by coffee spills, downpours, or pool plunges."
  },
  {
    icon: Monitor,
    title: "Screen Breakage",
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20 hover:border-purple-500",
    description: "Immediate diagnostic assessment and replacement of shattered OLED / LCD display glass panels."
  },
  {
    icon: Trash2,
    title: "Theft & Loss",
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20 hover:border-rose-500",
    description: "Premium plan security options covering unauthorized physical diversion, burglary, or misplaced devices."
  }
];

export default function CoverageGrid() {
  return (
    <div className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-extrabold uppercase tracking-widest text-xs mb-3">Enterprise Coverage Suite</h2>
          <h3 className="text-4xl font-extrabold tracking-tight mb-5 sm:text-5xl">What exactly is covered?</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Ensure your digital lifelines are robustly safeguarded from standard, everyday hazards. Our customized protection policies offer peace of mind.
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COVERAGE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`bg-slate-800/60 p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${item.color}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-slate-800">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-800">
          <div className="flex space-x-4">
            <div className="text-indigo-400 flex-shrink-0 mt-1">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h5 className="font-extrabold text-white text-lg mb-2">Global Protection</h5>
              <p className="text-slate-400 text-sm leading-relaxed">Coverage follows your device worldwide. File claims seamlessly while travelling overseas.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-indigo-400 flex-shrink-0 mt-1">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h5 className="font-extrabold text-white text-lg mb-2">Same-Day Processing</h5>
              <p className="text-slate-400 text-sm leading-relaxed">Drop off your broken screen at a certified shop, walk out with a factory replacement hours later.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-indigo-400 flex-shrink-0 mt-1">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h5 className="font-extrabold text-white text-lg mb-2">Certified Repair Network</h5>
              <p className="text-slate-400 text-sm leading-relaxed">No cheap third-party components. We work exclusively with authorized repair networks.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}