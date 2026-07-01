"use client";

import { Question } from "@/data/questions";
import { Mode, Theme, themeQuestionCount } from "@/lib/game";

interface SetupProps {
  themes: Theme[];
  questions: Question[];
  mode: Mode;
  setMode: (m: Mode) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  onStart: () => void;
  onBack: () => void;
  showBack: boolean;
}

const MODE_HINTS: Record<Mode, string> = {
  timed: "Beat the clock — faster answers earn bonus XP.",
  relaxed: "No timer. Learn at your own pace.",
};

export default function Setup({ themes, questions, mode, setMode, theme, setTheme, onStart, onBack, showBack }: SetupProps) {
  return (
    <section className="pt-8 pb-4 max-w-[600px] mx-auto">
      {showBack && (
        <button onClick={onBack} className="text-sm text-muted hover:text-ink mb-2 flex items-center gap-1">
          ← Back
        </button>
      )}

      <div className="text-center mb-8">
        <h2 className="font-serif font-semibold text-[32px]">Set up your round</h2>
        <p className="text-muted mt-1.5">A few quick choices, then you're in.</p>
      </div>

      {/* how it works */}
      <div className="grid grid-cols-3 gap-3 mb-9">
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
      <div className="text-center mb-9">
        <div className="text-xs font-semibold tracking-wider uppercase text-muted mb-3">Pace</div>
        <div
          className="inline-flex gap-1.5 bg-card border border-line rounded-full p-1.5"
          role="group"
          aria-label="Game mode"
        >
          {(["timed", "relaxed"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`font-sans text-sm font-semibold cursor-pointer px-5 py-2.5 rounded-full border-none transition-all whitespace-nowrap ${
                mode === m
                  ? "bg-green text-white shadow-[0_4px_12px_-4px_rgba(10,193,142,0.6)]"
                  : "bg-transparent text-muted hover:text-ink"
              }`}
            >
              {m === "timed" ? "⚡ Timed" : "🧘 Relaxed"}
            </button>
          ))}
        </div>
        <div className="mt-2.5 text-[13px] text-muted min-h-[18px]">{MODE_HINTS[mode]}</div>
      </div>

      {/* topic picker */}
      <div className="text-center mb-9">
        <div className="text-xs font-semibold tracking-wider uppercase text-muted mb-3">Topic</div>
        <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label="Topic">
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
      </div>

      <div className="text-center">
        <button onClick={onStart} className="btn btn-primary text-lg px-10 py-4">
          Start exploring →
        </button>
      </div>
    </section>
  );
}
