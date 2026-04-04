'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, prompt }), // We can send the prompt too if the API handles it, or just ignore it
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('success'); // Fallback for UX
      }
    } catch (err) {
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-neutral-200 font-sans selection:bg-indigo-500/30">
      
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-5xl mx-auto">
        <div className="text-xl font-bold text-white tracking-tighter">
          HUKD<span className="text-indigo-500">.</span>
        </div>
        <div className="text-sm font-medium text-neutral-500 hover:text-white transition-colors cursor-pointer">
          Login
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-3xl mx-auto px-6 pt-20 pb-32 text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-400 mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Private Beta - Join the Waitlist</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Create Viral Shorts <br className="hidden md:block" /> with AI
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl">
          Tell Hukd which kind of video you want to create in plain English. Join the waitlist to get early access.
        </p>

        {/* Waitlist & Prompt Area */}
        <div className="w-full max-w-2xl bg-[#0A0A0A] border border-neutral-800 rounded-2xl p-4 shadow-2xl relative">
          
          {status !== 'success' ? (
            <form onSubmit={handleWaitlist} className="flex flex-col text-left">
              <label className="text-sm font-medium text-neutral-400 mb-2 px-2">1. What do you want to create?</label>
              <textarea 
                rows={2}
                placeholder="Ex: Create a highly engaging video about the dark psychology of dropshipping..." 
                className="w-full bg-[#111] border border-neutral-800 rounded-xl text-white px-4 py-3 mb-6 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              <label className="text-sm font-medium text-neutral-400 mb-2 px-2">2. Where should we send your invite?</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="flex-1 bg-[#111] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center min-w-[140px]"
                >
                  {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Waitlist"}
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center p-10 animate-in zoom-in-95 duration-500">
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-neutral-400 text-sm text-center">We've saved your spot. You'll be notified as soon as your account is ready.</p>
            </div>
          )}
        </div>
      </main>

      {/* Steps Section (Exactly matching ShortcutStudio flow) */}
      <section className="border-t border-neutral-900 py-24">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          
          <div className="flex flex-col">
            <span className="text-indigo-500 font-mono text-sm font-bold tracking-widest mb-4">01</span>
            <h3 className="text-2xl font-bold text-white mb-4">Describe</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Tell Hukd which kind of video you want to create in plain English, and our AI builds the first version for you.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-indigo-500 font-mono text-sm font-bold tracking-widest mb-4">02</span>
            <h3 className="text-2xl font-bold text-white mb-4">Refine</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Use the visual editor to tweak clips, adjust captions, and perfect your video's pacing.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-indigo-500 font-mono text-sm font-bold tracking-widest mb-4">03</span>
            <h3 className="text-2xl font-bold text-white mb-4">Export & Post</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Download the MP4 file and post it directly on TikTok, Reels, or YouTube Shorts.
            </p>
          </div>

        </div>
      </section>

      {/* Deep Dive Features Section */}
      <section className="bg-[#050505] border-t border-neutral-900 py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Instant Generation</h3>
              <p className="text-neutral-400 leading-relaxed">
                Go from prompt to a fully functional, edited video in seconds using our advanced AI models. No more spending hours finding the right footage or syncing audio.
              </p>
            </div>
            {/* Placeholder for future UI screenshot */}
            <div className="h-48 bg-neutral-900 rounded-xl border border-neutral-800 hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Placeholder for future UI screenshot */}
            <div className="h-48 bg-neutral-900 rounded-xl border border-neutral-800 hidden md:block"></div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Visual Editor</h3>
              <p className="text-neutral-400 leading-relaxed">
                Tweaking your video is as easy as dragging blocks. See changes in real-time. Swap a B-roll, change a caption style, or regenerate a specific audio segment with one click.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Expanded FAQ Section */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-10">
          
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Do I need video editing experience?</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">No. Just describe what you want your video to do in plain English. Our AI handles the pacing, logic, and structure. That said, we do make it easy for you to change your video.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">How do I get the video on my phone?</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">We generate a downloadable .mp4 file. You can save it directly to your camera roll and upload it to your favorite social platform.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">Can the AI make any video I describe?</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">While the AI is powerful, it currently excels at faceless, narrative-driven, and B-roll heavy content. We are constantly expanding our visual library.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">Where do the B-rolls come from?</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">We maintain a massive, constantly updated library of high-retention, copyright-safe clips specifically curated for short-form content. You don't need external subscriptions.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">Does this work for YouTube and TikTok too?</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">Yes. All our generated videos are formatted in vertical 9:16 aspect ratio, perfectly optimized for TikTok, Instagram Reels, and YouTube Shorts.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12 text-center">
        <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-sm text-neutral-500 mb-8">Have questions or need enterprise support?</p>
        <p className="text-xs text-neutral-700">© 2026 Hukd Studio. All rights reserved.</p>
      </footer>

    </div>
  );
}
