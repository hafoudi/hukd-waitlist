"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch soon.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to connect. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-3xl px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>SaaS for Content Creators</span>
        </div>

        {/* Hero Copy */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6">
          Create faster. <br className="hidden md:block" />
          Scale harder.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
          The ultimate AI toolkit to generate hooks, scripts, and thumbnails for TikTok, Reels, and YouTube Shorts in seconds. Stop editing, start publishing.
        </p>

        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md relative mb-6">
          <div className="relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={status === "loading" || status === "success"}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pr-32 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="absolute right-2 px-5 py-2 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin text-black" />
              ) : status === "success" ? (
                "Joined"
              ) : (
                <>
                  Join <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </div>
          
          {/* Status Message */}
          {message && (
            <p className={`mt-4 text-sm font-medium ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </form>

        <p className="text-sm text-neutral-500">
          Join 0 creators already on the waitlist.
        </p>
      </div>
    </main>
  );
}
