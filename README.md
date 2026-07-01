# BCH Explore

**How well do you know Bitcoin Cash?** A learn-and-earn knowledge game for the Bitcoin
Cash ecosystem — unscramble projects, answer questions, and bank Explore Points (XP)
as you go.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, deployed on
**Vercel**.

## What's here

- 90 verified questions across 17 categories, sourced from the live BCH ecosystem
  (minisatoshi.cash, 1KBCH).
- Four question types: unscramble, multiple choice, match-the-category, fill-in.
- XP scoring with streak bonuses.
- ⚡ **Timed** mode (15s countdown, speed bonus XP) and 🧘 **Relaxed** mode (no timer).
- Topic selection — play everything, or drill Wallets, DeFi, Builders, etc.
- A "Did you know?" fact after every answer.
- A shareable result card, generated on-device as a downloadable/shareable image.

## Project structure

```
src/
  app/
    layout.tsx        root layout, fonts, page metadata
    page.tsx           the whole game — composes Intro / Play / End screens
    globals.css         Tailwind + design tokens
    icon.svg             favicon
  components/
    Brand.tsx            logo + wordmark header
    Intro.tsx             hero, mode toggle, topic picker, start button
    StatsBar.tsx           XP / correct / streak / best, sticky during play
    QuestionCard.tsx        renders all 4 question types + the countdown timer
    EndScreen.tsx           final stats, rank, "explore again" / "change mode"
    ResultCard.tsx           shareable result-card preview + download/share
  data/
    questions.ts             ⭐ THE ONLY FILE YOU EDIT TO ADD/CHANGE QUESTIONS
  lib/
    game.ts                   themes, scoring constants, shared helpers
    useGame.ts                 the game state machine (a React hook)
    resultCard.ts                canvas drawing logic for the result card
```

## Adding questions

Everything content-related lives in `src/data/questions.ts`. Each question is a typed
object — see the `Question` interface at the top of that file for the exact shape per
type (`unscramble` / `multiple` / `match` / `fill`). Add a new object to the `QUESTIONS`
array with a unique `id` and it's live.

## Local development

Requires Node 18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> **Note:** the first build/dev run needs internet access once, to fetch the Fraunces
> and DM Sans fonts from Google Fonts via `next/font/google`. This is normal for any
> Next.js project using Google Fonts and isn't something you need to configure — it
> just needs a working network connection (which Vercel, GitHub Actions, and your own
> machine all have).

## Build for production

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. No configuration needed — Vercel auto-detects Next.js. Click **Deploy**.

That's it — you get a live URL, and every future push to `main` redeploys
automatically.

## Roadmap (not built yet, on purpose)

- **Leaderboard** — save scores across users. Needs a small backend/database
  (e.g. a Vercel Postgres or Supabase table + a couple of API routes under
  `src/app/api/`).
- **CashToken (MemCoin) claim** — let players paste a BCH address and receive
  CashTokens matching their XP. Needs careful design around anti-abuse (rate
  limits, thresholds) and secure custody of a payout wallet before it ships —
  see the project vision doc for the details.

Both slot cleanly into this Next.js structure via API routes when you're ready —
the game itself doesn't need to change.
