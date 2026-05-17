import React from 'react';
import { Camera, RefreshCw, Truck, ArrowRight } from 'lucide-react';

export default function ClaimsTimeline() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-extrabold uppercase tracking-widest text-xs mb-3">Expedited Claims Process</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">File Claims in Under 3 Minutes</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg mt-4">
            We've digitized standard bureaucracy and claims administration. File direct requests from any connected web portal effortlessly.
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connector Paths */}
          <div className="hidden md:block absolute top-12 left-[25%] w-[16%] border-t-2 border-dashed border-slate-200 -z-10"></div>
          <div className="hidden md:block absolute top-12 left-[58%] w-[16%] border-t-2 border-dashed border-slate-200 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-slate-900 hover:bg-indigo-600 text-white flex items-center justify-center text-xl font-black shadow-xl transition-colors duration-300">
              <Camera className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">1. Snap & Upload Photo</h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Take a quick photo of the physical device damage using another smartphone or laptop camera and upload it to our claim portal.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-slate-900 hover:bg-indigo-600 text-white flex items-center justify-center text-xl font-black shadow-xl transition-colors duration-300">
              <RefreshCw className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">2. Dynamic AI Validation</h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Our automated diagnostic model verifies and catalogs visual damage criteria instantly, skipping traditional manual administrative hold lines.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-slate-900 hover:bg-indigo-600 text-white flex items-center justify-center text-xl font-black shadow-xl transition-colors duration-300">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">3. Drop-off or Overnight Delivery</h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Select from local certified store drop-offs for rapid screen swaps or next-day shipping envelopes directly to your door.
              </p>
            </div>
          </div>

        </div>

        {}
        <div className="mt-20 bg-indigo-50/50 rounded-[2.5rem] p-8 md:p-12 border border-indigo-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-2xl font-bold text-slate-900">Need to file a claim right now?</h4>
            <p className="text-slate-600 text-sm md:text-base max-w-xl">
              Log in to your account dashboard, proceed to the device protection panel, and initiate your incident reports instantly.
            </p>
          </div>
          <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center space-x-2 shrink-0 cursor-pointer">
            <span>Access Claim Dashboard</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}