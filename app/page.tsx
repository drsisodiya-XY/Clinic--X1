"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Star, Activity, ShieldCheck, Zap, Heart, Award, Users } from 'lucide-react'

export default function HomeopathyLanding() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-emerald-500/30 overflow-x-hidden font-sans">
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-900/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/30 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 inline-block">
            Est. 1999 | 25+ Years of Excellence
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent leading-[1.1]">
            CURE THE <br /> <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">UNCURABLE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Dr. Anand Singh's Advanced Homeopathy Clinic offers revolutionary healing for all chronic, acute, and complex lifestyle diseases with a holistic approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://wa.me/919415808611" className="px-10 py-5 bg-emerald-600 rounded-2xl font-bold shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:bg-emerald-500 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Book Appointment
            </a>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-gray-800 flex items-center justify-center text-[10px] font-bold">P{i}</div>
              ))}
              <div className="pl-4 text-sm text-gray-400 font-medium">10k+ Happy Patients</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h4 className="text-3xl font-bold text-emerald-500">25+</h4><p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Years Exp.</p></div>
          <div><h4 className="text-3xl font-bold text-emerald-500">100%</h4><p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Natural</p></div>
          <div><h4 className="text-3xl font-bold text-emerald-500">50k+</h4><p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Cases</p></div>
          <div><h4 className="text-3xl font-bold text-emerald-500">24/7</h4><p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Support</p></div>
        </div>
      </section>

      {/* Disease Mastery Section */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Holistic Mastery</h2>
            <p className="text-gray-400">Treating the root cause of all diseases with advanced homeopathic science.</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-10 mb-5"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Skin & Allergy", desc: "Psoriasis, Eczema, Chronic Allergies", icon: <ShieldCheck className="w-8 h-8 text-emerald-500" /> },
            { title: "Chronic Pains", desc: "Arthritis, Cervical, Sciatica, Migraine", icon: <Activity className="w-8 h-8 text-emerald-500" /> },
            { title: "Lifestyle Care", desc: "Diabetes, BP, Stress, Kidney & Liver", icon: <Heart className="w-8 h-8 text-emerald-500" /> }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl hover:bg-emerald-500/5 hover:border-emerald-500/40 transition-all duration-500 group">
              <div className="mb-6 p-4 bg-emerald-500/10 rounded-2xl w-fit group-hover:bg-emerald-500 group-hover:text-black transition-colors">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Testimonials / Ratings */}
      <section className="relative z-10 py-24 px-6 bg-emerald-500/5">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} fill="#10b981" className="text-emerald-500" />)}
            </div>
            <h2 className="text-4xl font-bold mb-8 italic leading-tight">"The transformation I saw in my chronic asthma after consulting Dr. Anand Singh was nothing short of a miracle. Truly advanced homeopathy!"</h2>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 border border-emerald-500/30"></div>
                <div className="text-left">
                    <p className="font-bold">Rajesh Kumar</p>
                    <p className="text-gray-500 text-sm italic">Verified Patient</p>
                </div>
            </div>
        </div>
      </section>

      {/* Floating Premium Actions */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://wa.me/919415808611" className="p-5 bg-green-500 rounded-3xl shadow-[0_20px_40px_rgba(34,197,94,0.3)] text-white">
          <MessageCircle size={32} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="tel:+919415808611" className="p-5 bg-red-600 rounded-3xl shadow-[0_20px_40px_rgba(220,38,38,0.3)] text-white animate-pulse">
          <Phone size={32} />
        </motion.a>
      </div>

      {/* Sleek Footer */}
      <footer className="relative z-10 py-16 px-6 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left">
                <h3 className="text-xl font-bold mb-2 text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">Dr. Anand Singh</h3>
                <p className="text-gray-500 text-sm">Empowering health since 1999.</p>
            </div>
            <div className="text-gray-500 text-sm">
                Master-Crafted by <span className="text-white font-serif italic tracking-widest ml-1">DEEPAK SISODIYA</span>
            </div>
            <div className="flex gap-6 text-gray-500">
                <Users size={20} className="hover:text-white cursor-pointer" />
                <Award size={20} className="hover:text-white cursor-pointer" />
            </div>
        </div>
      </footer>
    </div>
  )
}
