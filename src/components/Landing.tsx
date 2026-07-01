"use client";

interface LandingProps {
  onContinue: () => void;
}

export default function Landing({ onContinue }: LandingProps) {
  return (
    <section className="text-center pt-10 pb-4 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="inline-flex items-center gap-1.5 bg-ink text-green text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-green" />
        Bitcoin Cash · Knowledge Game
      </div>

      <h1 className="font-serif font-semibold leading-[1.05] tracking-tight text-[clamp(38px,8vw,64px)]">
        How well do you
        <br />
        know <em className="not-italic italic text-green-deep">Bitcoin Cash</em>?
      </h1>

      <p className="mt-5 text-muted text-[18px] max-w-[440px] mx-auto">
        A quick, fun way to learn the BCH ecosystem — and earn Explore Points while you do.
      </p>

      <button onClick={onContinue} className="btn btn-primary text-lg px-10 py-4 mt-9">
        Let&apos;s play →
      </button>

      <p className="mt-4 text-sm text-muted">Takes about 2 minutes</p>
    </section>
  );
}
