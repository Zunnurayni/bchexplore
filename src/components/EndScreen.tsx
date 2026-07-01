"use client";

import { RoundResult } from "@/lib/useGame";
import ResultCard from "@/components/ResultCard";

interface EndScreenProps {
  result: RoundResult;
  onAgain: () => void;
  onChangeMode: () => void;
}

export default function EndScreen({ result, onAgain, onChangeMode }: EndScreenProps) {
  return (
    <div className="card text-center px-6 py-10">
      <h2 className="font-serif text-[32px] font-semibold mb-1">Expedition complete</h2>
      <div className="font-serif font-semibold text-xp leading-none text-[72px]">
        {result.xp}
        <small className="text-[22px] text-ink">&nbsp;XP</small>
      </div>
      <div className="inline-block my-3.5 px-5 py-2 rounded-full font-semibold bg-ink text-green">
        {result.rank}
      </div>

      <div className="flex justify-center gap-8 my-5 flex-wrap">
        <div>
          <div className="font-serif text-[26px] font-semibold">
            {result.correct}/{result.total}
          </div>
          <div className="text-xs uppercase tracking-wider text-muted">Correct</div>
        </div>
        <div>
          <div className="font-serif text-[26px] font-semibold">{result.pct}%</div>
          <div className="text-xs uppercase tracking-wider text-muted">Accuracy</div>
        </div>
        <div>
          <div className="font-serif text-[26px] font-semibold">{result.best}</div>
          <div className="text-xs uppercase tracking-wider text-muted">Best streak</div>
        </div>
      </div>

      <div className="text-[13px] text-muted mb-1.5">
        Topic: {result.themeLabel} · Mode: {result.modeLabel}
      </div>

      <div className="flex gap-3 justify-center flex-wrap mt-5">
        <button onClick={onAgain} className="btn btn-primary">
          Explore again
        </button>
        <button onClick={onChangeMode} className="btn btn-ghost">
          Change mode
        </button>
      </div>

      <div className="flex justify-center mt-2">
        <ResultCard data={result} />
      </div>

      <div className="mt-5 max-w-[440px] mx-auto bg-xp/[.12] border border-dashed border-xp rounded-2xl px-4 py-4 text-sm text-[#7a5414]">
        ⚡ <b>Coming soon:</b> claim your Explore Points as CashTokens sent to your BCH address. A global
        leaderboard is on the way too.
      </div>
      <div className="mt-4 text-sm text-muted">Think you can beat this? Challenge a friend.</div>
    </div>
  );
}
