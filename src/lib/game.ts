import { Question } from "@/data/questions";

export type Mode = "timed" | "relaxed";

export interface Theme {
  key: string;
  label: string;
  cats: string[] | null; // null = all categories
}

// Topic groups: label -> list of question categories it includes.
// Small categories are bundled so every theme has enough questions for a round.
export const THEMES: Theme[] = [
  { key: "all", label: "🎲 All", cats: null },
  { key: "wallets", label: "👛 Wallets", cats: ["Wallet"] },
  { key: "defi", label: "📈 DeFi & DEX", cats: ["DeFi"] },
  { key: "tech", label: "⚙️ Tech & Tokens", cats: ["Tech"] },
  { key: "builders", label: "👩‍💻 Builders", cats: ["Developer", "DevTeam"] },
  { key: "infra", label: "🖧 Nodes & Explorers", cats: ["Node", "Explorer"] },
  { key: "pay", label: "🏪 Payments", cats: ["Payments", "CrowdFunding"] },
  { key: "culture", label: "🌍 Community & Media", cats: ["Community", "Social", "Media", "Charity", "Game"] },
  { key: "nft", label: "🎨 NFTs", cats: ["NFT"] },
  { key: "history", label: "📜 History & Privacy", cats: ["History", "Privacy"] },
];

export const QUESTIONS_PER_ROUND = 12; // 0 = use every matching question
export const BASE_POINTS = 10;
export const STREAK_BONUS = 5;
export const TIME_LIMIT = 15; // seconds per question in timed mode
export const MAX_SPEED_BONUS = 10; // extra XP for an instant answer, fades to 0

export function themeQuestionCount(theme: Theme, all: Question[]): number {
  return theme.cats ? all.filter((q) => theme.cats!.includes(q.category)).length : all.length;
}

export function shuffle<T>(arr: T[]): T[] {
  const r = arr.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

export function normalize(s: string): string {
  return (s || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function scrambleWord(word: string): string {
  return word
    .split(" ")
    .map((p) => {
      if (p.length <= 1) return p;
      let out: string;
      let tries = 0;
      do {
        out = shuffle(p.split("")).join("");
        tries++;
      } while (out === p && tries < 14);
      return out;
    })
    .join("  ");
}

export function rankForAccuracy(pct: number): string {
  if (pct === 100) return "BCH Legend 🎖";
  if (pct >= 80) return "Ecosystem Explorer";
  if (pct >= 60) return "Ecosystem Native";
  if (pct >= 40) return "Getting There";
  return "Curious Newcomer";
}

// speed bonus fades from MAX_SPEED_BONUS (instant) to 0 (right at the deadline)
export function speedBonus(deadline: number, timeLimitSec: number): number {
  const remain = Math.max(0, deadline - Date.now());
  const frac = remain / (timeLimitSec * 1000);
  return Math.round(MAX_SPEED_BONUS * frac);
}

export function stripEmoji(label: string): string {
  return label.replace(/^\S+\s/, "");
}
