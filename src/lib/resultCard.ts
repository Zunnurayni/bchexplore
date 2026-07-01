import { RoundResult } from "@/lib/useGame";
import { stripEmoji } from "@/lib/game";

const COLORS = {
  ink: "#0c2a23",
  paper: "#f3f0e7",
  green: "#0ac18e",
  greenDeep: "#089e74",
  xp: "#e8a13a",
  line: "#d9d4c5",
  muted: "#5d6b63",
  card: "#fbfaf5",
};

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export const CARD_WIDTH = 760;
export const CARD_HEIGHT = 950;

export async function drawResultCard(ctx: CanvasRenderingContext2D, data: RoundResult): Promise<void> {
  const C = COLORS;
  const W = CARD_WIDTH,
    H = CARD_HEIGHT,
    cx = W / 2;

  try {
    await Promise.all([
      document.fonts.load('600 46px Fraunces'),
      document.fonts.load('600 100px Fraunces'),
      document.fonts.load('700 13px "DM Sans"'),
      document.fonts.load('500 15px "DM Sans"'),
    ]);
  } catch {
    /* best-effort; canvas still draws with fallback fonts */
  }

  ctx.clearRect(0, 0, W, H);

  // background
  ctx.fillStyle = C.paper;
  ctx.fillRect(0, 0, W, H);
  let g = ctx.createRadialGradient(90, 60, 0, 90, 60, 300);
  g.addColorStop(0, "rgba(10,193,142,.10)");
  g.addColorStop(1, "rgba(10,193,142,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  g = ctx.createRadialGradient(670, 40, 0, 670, 40, 280);
  g.addColorStop(0, "rgba(232,161,58,.10)");
  g.addColorStop(1, "rgba(232,161,58,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // card panel
  const px = 44,
    py = 44,
    pw = W - px * 2,
    ph = H - py * 2;
  ctx.save();
  ctx.shadowColor = "rgba(12,42,35,.18)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 18;
  roundRect(ctx, px, py, pw, ph, 28);
  ctx.fillStyle = C.card;
  ctx.fill();
  ctx.restore();
  roundRect(ctx, px, py, pw, ph, 28);
  ctx.strokeStyle = C.line;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  let y = py + 70;

  // logo + wordmark, centered as a group
  ctx.textBaseline = "alphabetic";
  ctx.font = '600 24px "Fraunces"';
  const word1 = "BCH ",
    word2 = "Explore";
  const w1 = ctx.measureText(word1).width,
    w2 = ctx.measureText(word2).width;
  const logoSize = 38,
    gap = 10;
  const groupW = logoSize + gap + w1 + w2;
  const gx = cx - groupW / 2;
  roundRect(ctx, gx, y - 27, logoSize, logoSize, 10);
  ctx.fillStyle = C.green;
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = '600 20px "Fraunces"';
  ctx.textAlign = "center";
  ctx.fillText("B", gx + logoSize / 2, y - 3);
  ctx.textAlign = "left";
  ctx.font = '600 24px "Fraunces"';
  let tx = gx + logoSize + gap;
  ctx.fillStyle = C.ink;
  ctx.fillText(word1, tx, y);
  tx += w1;
  ctx.fillStyle = C.greenDeep;
  ctx.fillText(word2, tx, y);
  ctx.textAlign = "center";

  y += 54;
  ctx.font = '700 12px "DM Sans"';
  const kickText = "BITCOIN CASH · KNOWLEDGE GAME";
  const kw = ctx.measureText(kickText).width + 34;
  roundRect(ctx, cx - kw / 2, y - 20, kw, 32, 16);
  ctx.fillStyle = C.ink;
  ctx.fill();
  ctx.fillStyle = C.green;
  ctx.fillText(kickText, cx, y + 1);

  y += 68;
  ctx.font = '600 40px "Fraunces"';
  ctx.fillStyle = C.ink;
  ctx.fillText("Expedition complete", cx, y);

  y += 110;
  ctx.font = '600 96px "Fraunces"';
  const xpStr = String(data.xp);
  const xpW = ctx.measureText(xpStr).width;
  ctx.font = '600 30px "Fraunces"';
  const lblW = ctx.measureText(" XP").width;
  const totalW = xpW + lblW;
  let nx = cx - totalW / 2;
  ctx.textAlign = "left";
  ctx.font = '600 96px "Fraunces"';
  ctx.fillStyle = C.xp;
  ctx.fillText(xpStr, nx, y);
  nx += xpW;
  ctx.font = '600 30px "Fraunces"';
  ctx.fillStyle = C.ink;
  ctx.fillText(" XP", nx, y - 6);
  ctx.textAlign = "center";

  y += 56;
  ctx.font = '700 17px "Fraunces"';
  const rankW = ctx.measureText(data.rank).width + 46;
  roundRect(ctx, cx - rankW / 2, y - 24, rankW, 40, 20);
  ctx.fillStyle = C.ink;
  ctx.fill();
  ctx.fillStyle = C.green;
  ctx.fillText(data.rank, cx, y + 3);

  y += 76;
  const stats = [
    { v: `${data.correct}/${data.total}`, l: "CORRECT" },
    { v: `${data.pct}%`, l: "ACCURACY" },
    { v: `${data.best}`, l: "BEST STREAK" },
  ];
  const colW = pw / 3;
  stats.forEach((s, i) => {
    const scx = px + colW * i + colW / 2;
    ctx.font = '600 30px "Fraunces"';
    ctx.fillStyle = C.ink;
    ctx.fillText(s.v, scx, y);
    ctx.font = '700 11px "DM Sans"';
    ctx.fillStyle = C.muted;
    ctx.fillText(s.l, scx, y + 22);
  });

  y += 70;
  ctx.font = '500 15px "DM Sans"';
  ctx.fillStyle = C.muted;
  ctx.fillText(`Topic: ${stripEmoji(data.themeLabel)}  ·  Mode: ${stripEmoji(data.modeLabel)}`, cx, y);

  y += 40;
  ctx.strokeStyle = C.line;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(px + 70, y);
  ctx.lineTo(px + pw - 70, y);
  ctx.stroke();

  y += 48;
  ctx.font = 'italic 500 16px "DM Sans"';
  ctx.fillStyle = C.muted;
  ctx.fillText("Learn. Play. Explore.", cx, y);
  y += 26;
  ctx.font = '500 13px "DM Sans"';
  ctx.fillStyle = C.muted;
  ctx.fillText("A Bitcoin Cash knowledge game", cx, y);

  ctx.textAlign = "left";
}
