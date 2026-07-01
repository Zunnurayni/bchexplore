"use client";

import { useEffect, useRef, useState } from "react";
import { RoundResult } from "@/lib/useGame";
import { CARD_HEIGHT, CARD_WIDTH, drawResultCard } from "@/lib/resultCard";

interface ResultCardProps {
  data: RoundResult;
}

export default function ResultCard({ data }: ResultCardProps) {
  const [show, setShow] = useState(false);
  const [canShareFiles, setCanShareFiles] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    drawResultCard(ctx, data).then(() => {
      if (cancelled) return;
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });

      canvas.toBlob((blob) => {
        if (!blob || cancelled) return;
        try {
          const file = new File([blob], "bch-explore-result.png", { type: "image/png" });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            setCanShareFiles(true);
          }
        } catch {
          /* File API unsupported — download button still works */
        }
      }, "image/png");
    });
    return () => {
      cancelled = true;
    };
  }, [show, data]);

  function handleDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "bch-explore-result.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    }, "image/png");
  }

  function handleShare() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      try {
        const file = new File([blob], "bch-explore-result.png", { type: "image/png" });
        navigator.share({
          files: [file],
          title: "BCH Explore",
          text: `I scored ${data.xp} XP on BCH Explore! Think you can beat it?`,
        }).catch(() => {});
      } catch {
        /* no-op */
      }
    }, "image/png");
  }

  return (
    <div ref={containerRef}>
      {!show && (
        <button onClick={() => setShow(true)} className="btn btn-ghost">
          🖼️ Get result card
        </button>
      )}
      {show && (
        <div className="mt-6 max-w-[380px] mx-auto">
          <canvas
            ref={canvasRef}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            className="w-full h-auto rounded-2xl shadow-[0_16px_40px_-20px_rgba(12,42,35,0.55)] block"
          />
          <div className="flex gap-2.5 justify-center mt-4 flex-wrap">
            <button onClick={handleDownload} className="btn btn-primary">
              Download image
            </button>
            {canShareFiles && (
              <button onClick={handleShare} className="btn btn-ghost">
                Share
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
