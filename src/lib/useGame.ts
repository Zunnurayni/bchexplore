"use client";

import { useCallback, useMemo, useState } from "react";
import { Question, QUESTIONS } from "@/data/questions";
import {
  BASE_POINTS,
  Mode,
  QUESTIONS_PER_ROUND,
  STREAK_BONUS,
  Theme,
  rankForAccuracy,
  shuffle,
} from "@/lib/game";

export type GameStatus = "intro" | "playing" | "finished";

export interface RoundResult {
  xp: number;
  correct: number;
  total: number;
  pct: number;
  best: number;
  rank: string;
  themeLabel: string;
  modeLabel: string;
}

interface UseGameApi {
  status: GameStatus;
  mode: Mode;
  setMode: (m: Mode) => void;
  theme: Theme | null;
  setTheme: (t: Theme) => void;
  order: number[];
  pos: number;
  currentQuestion: Question | null;
  xp: number;
  correct: number;
  streak: number;
  best: number;
  progressPct: number;
  start: () => void;
  restart: () => void;
  backToIntro: () => void;
  answer: (isCorrect: boolean, speedBonus: number) => number; // returns streak bonus awarded
  goNext: () => void;
  result: RoundResult | null;
}

export function useGame(themes: Theme[]): UseGameApi {
  const [status, setStatus] = useState<GameStatus>("intro");
  const [mode, setMode] = useState<Mode>("timed");
  const [theme, setThemeState] = useState<Theme>(themes[0]);
  const [order, setOrder] = useState<number[]>([]);
  const [pos, setPos] = useState(0);
  const [xp, setXp] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);

  const start = useCallback(() => {
    const indices = QUESTIONS.map((_, i) => i).filter(
      (i) => !theme.cats || theme.cats.includes(QUESTIONS[i].category)
    );
    let idx = shuffle(indices);
    if (QUESTIONS_PER_ROUND > 0) idx = idx.slice(0, Math.min(QUESTIONS_PER_ROUND, idx.length));
    setOrder(idx);
    setPos(0);
    setXp(0);
    setCorrect(0);
    setStreak(0);
    setBest(0);
    setStatus("playing");
  }, [theme]);

  const restart = useCallback(() => start(), [start]);

  const backToIntro = useCallback(() => setStatus("intro"), []);

  const currentQuestion = useMemo<Question | null>(() => {
    if (status !== "playing" || pos >= order.length) return null;
    return QUESTIONS[order[pos]];
  }, [status, pos, order]);

  // records a correct/incorrect answer; returns the streak bonus (0 if incorrect or first-in-streak)
  const answer = useCallback(
    (isCorrect: boolean, bonusSpeed: number): number => {
      if (!currentQuestion) return 0;
      if (isCorrect) {
        const newStreak = streak + 1;
        const streakB = newStreak > 1 ? STREAK_BONUS : 0;
        setStreak(newStreak);
        setBest((b) => Math.max(b, newStreak));
        setCorrect((c) => c + 1);
        setXp((x) => x + (currentQuestion.points || BASE_POINTS) + streakB + bonusSpeed);
        return streakB;
      } else {
        setStreak(0);
        return 0;
      }
    },
    [currentQuestion, streak]
  );

  const goNext = useCallback(() => {
    const nextPos = pos + 1;
    if (nextPos >= order.length) {
      setStatus("finished");
    } else {
      setPos(nextPos);
    }
  }, [pos, order.length]);

  const progressPct = order.length ? (pos / order.length) * 100 : 0;

  const result = useMemo<RoundResult | null>(() => {
    if (status !== "finished") return null;
    const total = order.length;
    const pct = total ? Math.round((correct / total) * 100) : 0;
    return {
      xp,
      correct,
      total,
      pct,
      best,
      rank: rankForAccuracy(pct),
      themeLabel: theme.label,
      modeLabel: mode === "timed" ? "⚡ Timed" : "🧘 Relaxed",
    };
  }, [status, order.length, correct, xp, best, theme.label, mode]);

  return {
    status,
    mode,
    setMode,
    theme,
    setTheme,
    order,
    pos,
    currentQuestion,
    xp,
    correct,
    streak,
    best,
    progressPct,
    start,
    restart,
    backToIntro,
    answer,
    goNext,
    result,
  };
}
