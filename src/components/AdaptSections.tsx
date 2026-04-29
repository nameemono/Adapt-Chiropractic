/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MapPin, Star, CheckCircle, Menu, X, ChevronRight, MessageSquare, Award, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  primary: '#0f766e', // teal-700
  accent: '#14b8a6', // teal-500
  dark: '#0f172a', // slate-900
  light: '#f8fafc', // slate-50
};

// --- 1. Sticky Nav ---
export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
            <span className="font-heading font-bold text-xl tracking-tight text-slate-800">Adapt <span className="text-teal-600">Chiropractic</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex gap-6 text-xs font-semibold text-slate-500 uppercase tracking-widest">
              <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
              <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-teal-600 transition-colors">Location</a>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold px-5 h-10 text-sm transition-all shadow-sm" asChild>
              <a href="tel:01112698227" className="flex items-center gap-2">
                Call 011-1269 8227
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
             <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? <X /> : <Menu />}
             </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">Services</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">About</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">Contact</a>
              <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white rounded-xl py-6" asChild>
                <a href="tel:01112698227" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 011-1269 8227
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- 2. Hero ---
export const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-center"
          >
            <div className="inline-block bg-teal-50 text-teal-700 text-xs font-extrabold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
              Kuala Lumpur's Finest
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-slate-900 leading-[1.1] mb-6">
              Reclaim Your <span className="text-teal-600">Mobility</span> & Live Pain Free.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Expert chiropractic care in the heart of OUG. We don't just treat symptoms; we adapt your body for peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-teal-600 text-white h-14 px-8 rounded-2xl font-bold shadow-md hover:bg-teal-700 text-lg transition-all" asChild>
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <Button variant="outline" className="border-2 border-slate-200 text-slate-700 h-14 px-8 rounded-2xl font-bold hover:bg-slate-50 text-lg italic transition-all" asChild>
                <a href="tel:01112698227">Call Now</a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-sm h-full max-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                alt="Professional Treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- 3. Services Grid ---
const services = [
  {
    title: 'Chiropractic Adjustment',
    description: 'Specialized spinal manipulation to restore joint mobility and improve function.',
    icon: <Award className="w-8 h-8 text-teal-600" />
  },
  {
    title: 'Sports Rehabilitation',
    description: 'Targeted recovery programs designed for athletes to return to peak performance.',
    icon: <CheckCircle className="w-8 h-8 text-teal-600" />
  },
  {
    title: 'Postural Correction',
    description: 'Comprehensive analysis and treatment to fix "tech-neck" and desk-job slouching.',
    icon: <div className="w-8 h-8 flex items-center justify-center text-teal-600 font-bold text-2xl">|</div>
  },
  {
    title: 'Decompression Therapy',
    description: 'Non-surgical relief for herniated discs, sciatica, and chronic back pain.',
    icon: <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-8 h-8 text-teal-600"><ChevronRight className="rotate-90" /></motion.div>
  },
  {
    title: 'Pediatric Care',
    description: 'Gentle adjustments for children to support healthy growth and development.',
    icon: <div className="w-8 h-8 bg-teal-100 rounded-lg" />
  },
  {
    title: 'Geriatric Well-being',
    description: 'Care tailored for seniors to maintain mobility and reduce age-related stiffness.',
    icon: <Clock className="w-8 h-8 text-teal-600" />
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="text-left">
            <h2 className="text-3xl font-heading font-black text-slate-900">Premium Care</h2>
            <p className="text-slate-500 mt-2">Precision alignment for every stage of life.</p>
          </div>
          <span className="text-teal-600 text-xs font-bold tracking-widest cursor-pointer hover:underline">VIEW ALL SERVICES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div key={idx} whileHover={{ y: -4 }}>
              <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 h-full flex flex-col gap-4 group hover:border-teal-100 transition-all">
                <div className="w-12 h-12 flex items-center justify-center text-teal-600 bg-white rounded-xl shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="font-bold text-xl text-slate-800">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. Service Area ---
export const ServiceArea = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          <div className="flex-1 space-y-6 relative z-10">
            <div className="w-12 h-12 bg-teal-700/50 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-teal-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Conveniently Located in Taman OUG</h2>
            <p className="text-teal-100 text-lg leading-relaxed">
              Find us at <span className="text-white font-semibold">42, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala Lumpur</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Taman OUG', 'Sri Petaling', 'Bukit Jalil', 'Old Klang Road', 'Puchong', 'Happy Garden'].map((city) => (
                <span key={city} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/5 whitespace-nowrap">
                  {city}
                </span>
              ))}
            </div>
            <Button size="lg" className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 h-auto text-lg font-bold" asChild>
               <a href="https://maps.google.com/?q=42, Jalan Awan Hijau, Taman Overseas Union" target="_blank" rel="noopener">Get Directions</a>
            </Button>
          </div>
          <div className="flex-1 w-full h-[300px] rounded-3xl overflow-hidden border-4 border-teal-800/50 shadow-2xl relative z-10">
             <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
              alt="Inside Adapt Chiropractic"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. About ---
export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-teal-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-lg overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6">
              <h3 className="font-heading font-black text-3xl md:text-4xl text-white">Our Mission</h3>
              <p className="text-teal-100 text-xl leading-relaxed italic opacity-90">
                "Adapt Chiropractic & Rehab was founded with a single goal: providing clinical excellence for the OUG community. Our lead practitioner brings precision and patient-focused musculoskeletal rehabilitation to help you move better every day."
              </p>
              <div className="flex gap-10 pt-4">
                <div>
                  <div className="text-4xl font-black text-white">8+</div>
                  <div className="text-[10px] uppercase tracking-widest text-teal-400 font-bold mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-teal-400 font-bold mt-1">Local Focus</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="aspect-square rounded-[2rem] overflow-hidden rotate-3 shadow-2xl border-4 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Clinical Care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. Trust Row ---
export const TrustRow = () => {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-yellow-50 rounded-[2rem] border border-yellow-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-yellow-500 font-bold text-lg">
              ★★★★★ <span className="text-slate-800 ml-2 font-black">5.0 Rating</span>
            </div>
            <p className="text-slate-600 font-medium italic text-lg leading-snug">
              "The best chiro in KL! Recovered from years of back pain in just 3 sessions."
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-1">
            <div className="text-xs text-slate-400 font-black uppercase tracking-[0.2em]">
              181 Google Reviews • 5★ Service
            </div>
            <div className="text-teal-600 font-bold uppercase text-[10px] tracking-widest bg-teal-50 px-3 py-1 rounded-full w-fit">
              Verified Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. FAQ ---
const faqs = [
  {
    q: "Do I need a referral to see a Chiropractor?",
    a: "No, Chiropractors are primary contact practitioners, meaning you can visit us directly without a doctor's referral."
  },
  {
    q: "Is chiropractic treatment painful?",
    a: "Generally, chiropractic adjustments are not painful. You might feel a popping sensation (release of gas bubbles) and some mild soreness afterwards, similar to how you feel after a workout."
  },
  {
    q: "How many sessions will I need?",
    a: "This varies based on your condition. After your initial assessment, we will provide a personalized clinical management plan with an estimated timeline."
  },
  {
    q: "Are the adjustments safe?",
    a: "Yes, chiropractic is widely recognized as one of the safest non-invasive, drug-free therapies available for neuromuscular conditions."
  },
  {
    q: "Can I claim insurance for my treatments?",
    a: "Many private health insurance providers in Malaysia cover chiropractic care. We can provide invoices and reports to assist with your claim."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="mb-10">
            <h3 className="font-heading font-black text-2xl text-slate-800 mb-2">Common Questions</h3>
            <p className="text-sm text-slate-500 font-medium tracking-wide">Everything you need to know before booking.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <div className="p-4 border-b border-slate-50 text-sm font-bold text-slate-700 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors rounded-xl">
                  <span>{faq.q}</span>
                  <span className="text-teal-600 text-lg">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 8. Contact Form ---
export const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-slate-900 p-10 md:p-14 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl" />
            <h3 className="font-heading font-black text-4xl mb-6">Book Your Visit</h3>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              Ready to start your recovery? Leave your details and we'll call you back within 24 hours.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Full Name" className="h-14 px-6 bg-slate-800/50 border-white/10 rounded-2xl text-base focus-visible:ring-teal-500" />
              <Input placeholder="Phone (e.g. 012-345 6789)" className="h-14 px-6 bg-slate-800/50 border-white/10 rounded-2xl text-base" />
              <Textarea rows={4} placeholder="Briefly describe your pain or condition..." className="px-6 py-4 bg-slate-800/50 border-white/10 rounded-2xl text-base" />
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white h-16 rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-lg shadow-teal-900/40">
                Request Call Back
              </Button>
            </form>
          </div>

          <div className="bg-slate-100 p-10 md:p-14 rounded-[2.5rem] flex flex-col border border-slate-200">
            <h3 className="font-heading font-black text-2xl text-slate-800 mb-4">Find Us in OUG</h3>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-sm">
              42, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia
            </p>
            
            <div className="flex-grow w-full min-h-[200px] bg-slate-200 rounded-[2rem] flex items-center justify-center text-slate-400 font-bold mb-8 shadow-inner overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                alt="Map context"
              />
              <span className="relative z-10 text-[10px] uppercase tracking-widest text-slate-500 bg-white/80 px-4 py-2 rounded-full shadow-sm">Interactive Map</span>
            </div>

            <div className="text-xs">
              <span className="font-black block mb-4 uppercase text-slate-400 text-[10px] tracking-widest">Serving Neighboring Areas:</span>
              <div className="flex flex-wrap gap-2">
                {['Old Klang Road', 'Bukit Jalil', 'Sri Petaling', 'Happy Garden', 'Kuchai Lama', 'Puchong'].map(area => (
                  <span key={area} className="bg-white px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer / Bottom Nav ---
export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-white/5 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                 <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">A</div>
                    <span className="font-heading font-bold text-white text-lg tracking-tight">Adapt Chiropractic</span>
                </div>
                <div className="text-sm text-center md:text-right">
                    <p>© {new Date().getFullYear()} Adapt Chiropractic & Rehab. All rights reserved.</p>
                    <p className="mt-1">42, Jalan Awan Hijau, Taman Overseas Union, Kuala Lumpur.</p>
                </div>
            </div>
        </footer>
    );
};

// --- 9. Sticky Bottom Call Button (Mobile Only) ---
export const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-[60] bg-teal-600 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
      <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
        <div className="text-white">
          <div className="font-black text-sm uppercase tracking-widest leading-none">Ready to start?</div>
          <p className="text-[10px] text-teal-100 opacity-80 mt-1 uppercase">Limited Slots This Week</p>
        </div>
        <Button className="bg-white text-teal-600 rounded-full h-12 px-6 font-black text-sm flex items-center gap-2 shadow-sm" asChild>
          <a href="tel:01112698227">
            📞 CALL NOW
          </a>
        </Button>
      </div>
    </div>
  );
};
