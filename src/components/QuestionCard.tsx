"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Question } from "@/data/questions";
import { MAX_SPEED_BONUS, Mode, TIME_LIMIT, normalize, scrambleWord, shuffle } from "@/lib/game";

interface QuestionCardProps {
  question: Question;
  index: number;
  mode: Mode;
  onAnswer: (isCorrect: boolean, bonusSpeed: number) => number; // returns streak bonus
  onNext: () => void;
}

const KEYS = ["A", "B", "C", "D", "E", "F"];
const TYPE_LABEL: Record<string, string> = {
  unscramble: "Unscramble",
  multiple: "Multiple choice",
  match: "Match category",
  fill: "Fill in the blank",
};

export default function QuestionCard({ question, index, mode, onAnswer, onNext }: QuestionCardProps) {
  const [answered, setAnswered] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chosenOpt, setChosenOpt] = useState<string | null>(null);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [remainMs, setRemainMs] = useState(TIME_LIMIT * 1000);

  const deadlineRef = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const answeredRef = useRef(false); // avoids stale closure in the interval

  const scrambled = useMemo(
    () => (question.type === "unscramble" ? scrambleWord(question.answer || "") : ""),
    [question.id]
  );
  const options = useMemo(
    () => (question.type === "multiple" || question.type === "match" ? shuffle(question.options || []) : []),
    [question.id]
  );

  // reset per-question state and (re)start the timer
  useEffect(() => {
    setAnswered(false);
    answeredRef.current = false;
    setInputValue("");
    setChosenOpt(null);
    setWasCorrect(false);
    setFeedback("");
    deadlineRef.current = Date.now() + TIME_LIMIT * 1000;
    setRemainMs(TIME_LIMIT * 1000);

    if (question.type === "unscramble" || question.type === "fill") {
      // focus after paint
      setTimeout(() => inputRef.current?.focus(), 0);
    }

    if (mode !== "timed") return;
    const iv = setInterval(() => {
      const remain = Math.max(0, deadlineRef.current - Date.now());
      setRemainMs(remain);
      if (remain <= 0) {
        clearInterval(iv);
        if (!answeredRef.current) {
          answeredRef.current = true;
          setAnswered(true);
          setWasCorrect(false);
          onAnswer(false, 0);
          setFeedback(`Time's up! Answer: ${question.answer || (question.accept ? question.accept[0] : "")}`);
        }
      }
    }, 200);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id, mode]);

  function computeSpeedBonus(): number {
    if (mode !== "timed") return 0;
    const remain = Math.max(0, deadlineRef.current - Date.now());
    const frac = remain / (TIME_LIMIT * 1000);
    return Math.round(MAX_SPEED_BONUS * frac);
  }

  function submitTyped() {
    if (answeredRef.current) return;
    const val = inputValue;
    if (!normalize(val)) return;
    answeredRef.current = true;
    setAnswered(true);
    const accept = question.type === "fill" ? question.accept || [] : [question.answer || ""];
    const ok = accept.some((a) => normalize(a) === normalize(val));
    setWasCorrect(ok);
    if (ok) {
      const bonus = computeSpeedBonus();
      const streakB = onAnswer(true, bonus);
      let s = `Correct! +${question.points} XP`;
      if (streakB) s += ` · +${streakB} streak`;
      if (bonus) s += ` · +${bonus} speed`;
      setFeedback(s);
    } else {
      onAnswer(false, 0);
      setFeedback(`Not quite. Answer: ${question.answer || (question.accept ? question.accept[0] : "")}`);
    }
  }

  function submitOption(opt: string) {
    if (answeredRef.current) return;
    answeredRef.current = true;
    setAnswered(true);
    setChosenOpt(opt);
    const ok = normalize(opt) === normalize(question.answer || "");
    setWasCorrect(ok);
    if (ok) {
      const bonus = computeSpeedBonus();
      const streakB = onAnswer(true, bonus);
      let s = `Correct! +${question.points} XP`;
      if (streakB) s += ` · +${streakB} streak`;
      if (bonus) s += ` · +${bonus} speed`;
      setFeedback(s);
    } else {
      onAnswer(false, 0);
      setFeedback("Not quite — the highlighted answer is correct.");
    }
  }

  const pctLeft = remainMs / (TIME_LIMIT * 1000);
  const timerColor = pctLeft <= 0.25 ? "bg-coral" : pctLeft <= 0.5 ? "bg-xp" : "bg-green";
  const isTyped = question.type === "unscramble" || question.type === "fill";

  return (
    <div className="card animate-[rise_.3s_ease]">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="font-serif font-semibold text-[15px] bg-green text-white w-[30px] h-[30px] rounded-[9px] grid place-items-center flex-shrink-0">
          {index + 1}
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-green-deep bg-green/10 px-2.5 py-1 rounded-full">
          {question.category}
        </div>
        <div className="text-xs text-muted ml-auto hidden sm:block">{TYPE_LABEL[question.type]}</div>
      </div>

      {mode === "timed" && (
        <div className="flex items-center gap-2.5 -mt-1.5 mb-4">
          <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-[width] duration-200 linear ${timerColor}`}
              style={{ width: `${pctLeft * 100}%` }}
            />
          </div>
          <div className={`font-serif font-semibold text-[15px] min-w-[34px] text-right tabular-nums ${pctLeft <= 0.25 ? "text-coral" : "text-muted"}`}>
            {Math.ceil(remainMs / 1000)}s
          </div>
        </div>
      )}

      {question.type === "unscramble" && (
        <>
          <div className="font-serif text-3xl font-semibold tracking-[6px] mt-1.5 mb-0.5" style={{ wordSpacing: 14 }}>
            {scrambled}
          </div>
          <div className="text-muted text-[15px] mt-2">{question.hint}</div>
        </>
      )}

      {(question.type === "unscramble" || question.type === "fill") && (
        <>
          {question.type === "fill" && <div className="text-xl font-medium leading-snug mb-1">{question.question}</div>}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            disabled={answered}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submitTyped();
              }
            }}
            placeholder={question.type === "unscramble" ? "Type the project name…" : "Type your answer…"}
            autoComplete="off"
            spellCheck={false}
            className="w-full mt-4.5 px-4 py-3.5 text-[17px] border-[1.5px] border-line rounded-xl bg-white text-ink focus:outline-none focus:border-green focus:ring-4 focus:ring-green/15"
          />
        </>
      )}

      {(question.type === "multiple" || question.type === "match") && (
        <>
          <div className="text-xl font-medium leading-snug">{question.question}</div>
          <div className="grid gap-2.5 mt-4.5">
            {options.map((opt, i) => {
              const isRight = normalize(opt) === normalize(question.answer || "");
              const isChosen = chosenOpt === opt;
              let cls = "bg-white border-line hover:border-green hover:bg-green/5";
              if (answered && isRight) cls = "border-green bg-green/10";
              else if (answered && isChosen && !isRight) cls = "border-coral bg-coral/10";
              return (
                <button
                  key={opt}
                  disabled={answered}
                  onClick={() => submitOption(opt)}
                  className={`text-left font-sans text-base text-ink border-[1.5px] rounded-xl px-4 py-3.5 flex items-center gap-3 transition-all disabled:cursor-default ${cls}`}
                >
                  <span
                    className={`w-6 h-6 flex-shrink-0 rounded-[7px] border grid place-items-center text-[13px] font-semibold ${
                      answered && isRight
                        ? "bg-green text-white border-green"
                        : answered && isChosen && !isRight
                        ? "bg-coral text-white border-coral"
                        : "bg-paper border-line text-muted"
                    }`}
                  >
                    {KEYS[i]}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {feedback && (
        <div className={`mt-4 text-[15px] font-semibold ${wasCorrect ? "text-green-deep" : "text-coral"}`}>
          {feedback}
        </div>
      )}

      {answered && question.learn && (
        <div className="mt-3.5 bg-ink/5 border-l-[3px] border-green rounded-r-lg px-4 py-3 text-[15px]">
          <b className="text-green-deep">Did you know?</b> {question.learn}
        </div>
      )}

      <div className="flex gap-3 mt-5 flex-wrap">
        {isTyped && !answered && (
          <button onClick={submitTyped} className="btn btn-primary">
            Check answer
          </button>
        )}
        {answered && (
          <button onClick={onNext} autoFocus className="btn btn-ghost">
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
