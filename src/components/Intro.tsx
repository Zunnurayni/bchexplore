"use client";

import { Question } from "@/data/questions";
import { Mode, Theme, themeQuestionCount } from "@/lib/game";

interface IntroProps {
  themes: Theme[];
  questions: Question[];
  mode: Mode;
  setMode: (m: Mode) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  onStart: () => void;
}

const MODE_HINTS: Record<Mode, string> = {
  timed: "Beat the clock — faster answers earn bonus XP.",
  relaxed: "No timer. Learn at your own pace.",
};

export default function Intro({ themes, questions, mode, setMode, theme, setTheme, onStart }: IntroProps) {
  return (
    <section className="text-center pt-8 pb-2">
      <div className="inline-flex items-center gap-1.5 bg-ink text-green text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-green" />
        Bitcoin Cash · Knowledge Game
      </div>

      <h1 className="font-serif font-semibold leading-[1.02] tracking-tight text-[clamp(36px,7.5vw,60px)]">
        How well do you
        <br />
        know <em className="not-italic italic text-green-deep">Bitcoin Cash</em>?
      </h1>

      <p className="mt-4 text-muted text-[17px] max-w-[470px] mx-auto">
        Unscramble projects, answer questions, and explore the BCH ecosystem — wallets, DeFi, history, and
        the builders behind it.
      </p>

      <div className="inline-flex items-center gap-2 mt-[22px] bg-xp/[.14] text-xp-deep border border-xp/40 px-4 py-2 rounded-full text-sm font-semibold">
        ⚡ Earn Explore Points for every correct answer
      </div>

      <div className="mt-[26px] max-w-[520px] mx-auto grid grid-cols-3 gap-3">
        {[
          ["1", "Answer mixed questions about BCH"],
          ["2", "Bank XP & build a streak"],
          ["3", "Learn a fact after every answer"],
        ].map(([n, txt]) => (
          <div key={n} className="bg-card border border-line rounded-2xl px-3 py-4 text-center">
            <div className="font-serif font-semibold text-green text-xl">{n}</div>
            <div className="text-[13px] text-muted mt-1 leading-snug">{txt}</div>
          </div>
        ))}
      </div>

      {/* mode toggle */}
      <div className="mt-[22px]">
        <div className="inline-flex gap-1.5 bg-card border border-line rounded-full p-1.5" role="group" aria-label="Game mode">
          {(["timed", "relaxed"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`font-sans text-sm font-semibold cursor-pointer px-4.5 py-2 rounded-full border-none transition-all ${
                mode === m
                  ? "bg-green text-white shadow-[0_4px_12px_-4px_rgba(10,193,142,0.6)]"
                  : "bg-transparent text-muted"
              }`}
            >
              {m === "timed" ? "⚡ Timed" : "🧘 Relaxed"}
            </button>
          ))}
        </div>
        <div className="mt-2.5 text-[13px] text-muted min-h-[18px]">{MODE_HINTS[mode]}</div>
      </div>

      {/* topic picker */}
      <div className="mt-6 text-xs font-semibold tracking-wider uppercase text-muted">Choose a topic</div>
      <div className="flex flex-wrap gap-2 justify-center mt-3 max-w-[560px] mx-auto" role="group" aria-label="Topic">
        {themes.map((t) => {
          const count = themeQuestionCount(t, questions);
          if (count === 0) return null;
          const active = t.key === theme.key;
          return (
            <button
              key={t.key}
              onClick={() => setTheme(t)}
              className={`font-sans text-sm font-semibold cursor-pointer px-4 py-2 rounded-full border transition-all ${
                active ? "bg-ink text-paper border-ink" : "bg-card text-ink border-line hover:border-green"
              }`}
            >
              {t.label}
              <span className={`ml-1.5 text-xs font-semibold ${active ? "opacity-70" : "opacity-55"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-[30px]">
        <button onClick={onStart} className="btn btn-primary text-lg px-10 py-4">
          Start exploring →
        </button>
      </div>
    </section>
  );
}
