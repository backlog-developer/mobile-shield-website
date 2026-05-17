import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ChevronDown, 
  Menu, 
  X,
  FileText,
  User,
  ArrowRight,
  ShieldAlert, 
  Droplet, 
  Monitor, 
  Trash2, 
  Globe, 
  Clock, 
  Zap,
  Smartphone, 
  Laptop, 
  Tablet,
  Camera,
  RefreshCw,
  Truck
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

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

function CoverageGrid() {
  return (
    <div className="py-24 bg-slate-900 text-white rounded-3xl my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-extrabold uppercase tracking-widest text-xs mb-3">Enterprise Coverage Suite</h2>
          <h3 className="text-4xl font-extrabold tracking-tight mb-5 sm:text-5xl">What exactly is covered?</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Ensure your digital lifelines are robustly safeguarded from standard, everyday hazards. Our customized protection policies offer peace of mind.
          </p>
        </div>

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

function PremiumCalculator({ triggerNotification }) {
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
    <div className="py-24 bg-slate-50 border-y border-slate-200/60 rounded-3xl my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-extrabold uppercase tracking-widest text-xs mb-3">Premium Engine</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Personalize Your Premium</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Input your electronics parameters below. Adjust your tier coverage instantly to see customized rate estimations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-xl shadow-slate-100 border border-slate-100 space-y-8">
            
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

          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-xl shadow-slate-100 border border-slate-100 flex flex-col justify-between h-full min-h-[480px]">
            <div className="text-center space-y-2">
              <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Your Personalized Estimate</p>
              <div className="inline-flex items-baseline justify-center text-indigo-600">
                <span className="text-3xl font-extrabold">$</span>
                <span className="text-6xl font-black tracking-tight">{premium}</span>
                <span className="text-slate-500 font-semibold text-lg">/mo</span>
              </div>
            </div>

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

function ClaimsTimeline() {
  return (
    <div className="py-24 bg-white rounded-3xl my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-extrabold uppercase tracking-widest text-xs mb-3">Expedited Claims Process</h2>
          <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">File Claims in Under 3 Minutes</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg mt-4">
            We've digitized standard bureaucracy and claims administration. File direct requests from any connected web portal effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          <div className="hidden md:block absolute top-12 left-[25%] w-[16%] border-t-2 border-dashed border-slate-200 -z-10"></div>
          <div className="hidden md:block absolute top-12 left-[58%] w-[16%] border-t-2 border-dashed border-slate-200 -z-10"></div>

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

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-fade-in-up border border-indigo-400">
          <Shield className="h-5 w-5 animate-pulse" />
          <span className="font-semibold text-sm">{notification}</span>
        </div>
      )}

      {}
      <nav className={`fixed w-full z-40 top-0 transition-all duration-300 ${isScrolled ? 'glass-nav border-b border-slate-200/80 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="bg-indigo-600 p-2.5 rounded-xl text-white shadow-md shadow-indigo-200">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-indigo-600">ShieldMobile</span>
            </div>

            <div className="hidden md:flex space-x-8 font-semibold text-slate-600">
              <button onClick={() => scrollToSection('coverage')} className="hover:text-indigo-600 transition cursor-pointer">Coverage</button>
              <button onClick={() => scrollToSection('calculator')} className="hover:text-indigo-600 transition cursor-pointer">Calculate Premium</button>
              <button onClick={() => scrollToSection('claims')} className="hover:text-indigo-600 transition cursor-pointer">Claims Workflow</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-indigo-600 transition cursor-pointer">FAQ</button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => triggerNotification("Account login feature coming soon.")}
                className="text-slate-600 font-bold hover:text-indigo-600 transition flex items-center space-x-1.5 cursor-pointer"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </button>
              <button 
                onClick={() => scrollToSection('calculator')} 
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 cursor-pointer"
              >
                Protect Now
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700 focus:outline-none p-1.5">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-lg">
            <button onClick={() => scrollToSection('coverage')} className="block w-full text-left font-semibold text-slate-700 hover:text-indigo-600 p-2 rounded-lg">Coverage</button>
            <button onClick={() => scrollToSection('calculator')} className="block w-full text-left font-semibold text-slate-700 hover:text-indigo-600 p-2 rounded-lg">Calculate Premium</button>
            <button onClick={() => scrollToSection('claims')} className="block w-full text-left font-semibold text-slate-700 hover:text-indigo-600 p-2 rounded-lg">Claims Workflow</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left font-semibold text-slate-700 hover:text-indigo-600 p-2 rounded-lg">FAQ</button>
            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
              <button onClick={() => triggerNotification("Account login portal coming soon.")} className="font-bold text-slate-700 flex items-center space-x-2 py-2 px-1"><User className="h-4 w-4" /> <span>Login</span></button>
              <button onClick={() => scrollToSection('calculator')} className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-md">Protect Now</button>
            </div>
          </div>
        )}
      </nav>

      {}
      <section className="pt-36 pb-20 px-4 bg-gradient-to-b from-indigo-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-100">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-ping"></span>
              Now covering premium devices & flagship series
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
              Don't let a <span className="text-indigo-600 relative inline-block">crack<span className="absolute bottom-1 left-0 w-full h-1.5 bg-indigo-200 -z-10 rounded-full"></span></span> ruin your day.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Mobile insurance provides coverage against unexpected repair or replacement costs for devices like smartphones, laptops, and tablets due to accidental damage, liquid spills, screen breakage, and theft. Starting at just $4.99/mo.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3.5 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('calculator')} 
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-xl shadow-indigo-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Calculate Premium</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => triggerNotification("Sample Policy PDF download initialized.")}
                className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:border-indigo-600 transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <FileText className="h-5 w-5 text-slate-500" />
                <span>View Sample Policy</span>
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=100" alt="Customer" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">+12k</div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Trusted by <span className="font-bold text-slate-900">80,000+</span> active device owners</p>
            </div>
          </div>

          <div className="relative justify-self-center lg:justify-self-end w-full max-w-md">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle"></div>
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100/80 transform hover:rotate-0 transition duration-500 ease-out rotate-2">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800" alt="Phone Protection" className="rounded-[2rem] w-full object-cover h-[450px]" />
              <div className="absolute bottom-10 -left-8 bg-white py-3.5 px-5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-bounce">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Claim Status</p>
                  <p className="font-extrabold text-slate-900 text-sm">Approved in 4 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="coverage" className="scroll-mt-24">
        <CoverageGrid />
      </section>

      <section id="calculator" className="scroll-mt-24">
        <PremiumCalculator triggerNotification={triggerNotification} />
      </section>

      <section id="claims" className="scroll-mt-24">
        <ClaimsTimeline />
      </section>

      {}
      <section id="faq" className="py-24 bg-white border-t border-slate-100 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-extrabold uppercase tracking-widest text-xs mb-3">Support Center</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What devices do you provide coverage for?",
                a: "We offer comprehensive protection for a broad range of personal electronics, including the latest flagship smartphones, productivity laptops, professional workstation tablets, and smartwatches."
              },
              {
                q: "How long does a typical repair cycle take?",
                a: "Most standardized screen repairs are executed within 24 hours of device handoff. In critical scenarios requiring complete device replacement under loss/theft claims, standard transit is handled via next-business-day expedited courier services."
              },
              {
                q: "Is there an out-of-pocket deductible applied per claim?",
                a: "Yes. Deductibles are scaled fairly to lower overall baseline monthly premiums. Standard deductibles sit at $29 for display glass replacement up to $99 for high-tier device replacement on catastrophic damage or theft."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className={`group border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeFaq === index ? 'border-indigo-500 bg-indigo-50/30' : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'}`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180 text-indigo-600' : ''}`} />
                </div>
                {activeFaq === index && (
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm transition-opacity duration-300 animate-fade-in-up">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-900 text-white pt-20 pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5">
                <div className="bg-indigo-600 p-2 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-black tracking-tight">ShieldMobile</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Modernizing personal device protection. We leverage software and streamlined engineering to deliver fast, premium digital device coverage.
              </p>
            </div>
            <div>
              <h6 className="font-extrabold text-sm uppercase tracking-wider text-slate-300 mb-6">Company</h6>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition">About Our Platform</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Insurtech Press</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-extrabold text-sm uppercase tracking-wider text-slate-300 mb-6">Policy Details</h6>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition">Coverage Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Claims Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-extrabold text-sm uppercase tracking-wider text-slate-300 mb-6">Stay Protected</h6>
              <p className="text-slate-400 text-sm mb-4">Subscribe to safety bulletins and security alerts.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full text-slate-200 placeholder-slate-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-sm"
                />
                <button 
                  onClick={() => triggerNotification("Subscribed successfully!")}
                  className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition"
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs leading-relaxed">
            <p>© 2026 ShieldMobile Insurance Solutions Inc. All rights reserved.</p>
            <p className="mt-1">Insurance products are underwritten in connection with leading industry underwriters and insurance carrier networks.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}