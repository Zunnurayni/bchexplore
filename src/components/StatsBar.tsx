interface StatsBarProps {
  xp: number;
  correct: number;
  streak: number;
  best: number;
  progressPct: number;
}

export default function StatsBar({ xp, correct, streak, best, progressPct }: StatsBarProps) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6 sticky top-2.5 z-20">
        <div className="stat-box">
          <div className="font-serif text-2xl font-semibold leading-none text-xp">{xp}</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9fb3aa] mt-1">XP</div>
        </div>
        <div className="stat-box">
          <div className="font-serif text-2xl font-semibold leading-none">{correct}</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9fb3aa] mt-1">Correct</div>
        </div>
        <div className="stat-box">
          <div className="font-serif text-2xl font-semibold leading-none">{streak}</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9fb3aa] mt-1">Streak</div>
        </div>
        <div className="stat-box">
          <div className="font-serif text-2xl font-semibold leading-none">{best}</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9fb3aa] mt-1">Best</div>
        </div>
      </div>
      <div className="h-1.5 bg-line rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-green to-green-deep rounded-full transition-[width] duration-300 ease-linear"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </>
  );
}
