"use client";

import Brand from "@/components/Brand";
import Intro from "@/components/Intro";
import StatsBar from "@/components/StatsBar";
import QuestionCard from "@/components/QuestionCard";
import EndScreen from "@/components/EndScreen";
import { QUESTIONS } from "@/data/questions";
import { THEMES } from "@/lib/game";
import { useGame } from "@/lib/useGame";

export default function Home() {
  const game = useGame(THEMES);

  return (
    <div className="max-w-[720px] mx-auto px-5">
      <Brand />

      {game.status === "intro" && (
        <Intro
          themes={THEMES}
          questions={QUESTIONS}
          mode={game.mode}
          setMode={game.setMode}
          theme={game.theme!}
          setTheme={game.setTheme}
          onStart={game.start}
        />
      )}

      {game.status === "playing" && game.currentQuestion && (
        <section>
          <StatsBar xp={game.xp} correct={game.correct} streak={game.streak} best={game.best} progressPct={game.progressPct} />
          <QuestionCard
            key={game.currentQuestion.id}
            question={game.currentQuestion}
            index={game.pos}
            mode={game.mode}
            onAnswer={game.answer}
            onNext={game.goNext}
          />
        </section>
      )}

      {game.status === "finished" && game.result && (
        <EndScreen result={game.result} onAgain={game.restart} onChangeMode={game.backToIntro} />
      )}

      <footer className="text-center py-8 pb-12 text-muted text-[13px]">
        <b>BCH Explore</b> — built for Bitcoin Cash adoption. Learn, play, explore.
        <br />
        Questions drawn from the live BCH ecosystem.
      </footer>
    </div>
  );
}
