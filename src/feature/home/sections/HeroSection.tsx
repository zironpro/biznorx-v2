"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef, useCallback } from "react"
import Link from "next/link"

type Pt = [number, number];
type Quad = [Pt, Pt, Pt, Pt];
type Item = { bg: string; skin: string; cloth: string; src?: string };

const SLOTS: Quad[] = [
  [[-250, 170], [-90, 207], [-90, 563], [-250, 620]],
  [[-90, 207], [40, 247], [40, 497], [-90, 563]],
  [[53, 262], [190, 295], [190, 460], [53, 500]],
  [[198, 302], [300, 315], [300, 446], [198, 461]],
  [[306, 318], [393, 322], [393, 441], [306, 446]],
  [[399, 321], [485, 318], [485, 443], [399, 440]],
  [[492, 311], [588, 305], [588, 457], [492, 447]],
  [[596, 281], [722, 273], [722, 488], [596, 455]],
  [[733, 256], [880, 236], [880, 540], [733, 506]],
  [[880, 236], [1050, 205], [1050, 610], [880, 540]],
];
const OPACITY = [0, 1, 1, 1, 1, 1, 1, 1, 1, 0];
const FADE_L = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
const FADE_R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1];

const ITEMS_DATA: Item[] = [
  { bg: "#8a9a7b", skin: "#c99878", cloth: "#e8d9b0" },
  { bg: "#c9c3b3", skin: "#b98a6b", cloth: "#e0a36a" },
  { bg: "#5a5a62", skin: "#c79a7a", cloth: "#5b3f6e" },
  { bg: "#2f3033", skin: "#7a4e36", cloth: "#26282b" },
  { bg: "#5f7480", skin: "#d9ad90", cloth: "#8f9ba0" },
  { bg: "#d99cb3", skin: "#d2a184", cloth: "#f0a9bf" },
  { bg: "#3a3b40", skin: "#d8ad92", cloth: "#8e7ab0" },
  { bg: "#b47b9e", skin: "#c99878", cloth: "#d9784c" },
  { bg: "#7d6a72", skin: "#c79a7a", cloth: "#8c4a4a" },
  { bg: "#6b5b7b", skin: "#d2a184", cloth: "#3f6b6b" },
];
const N = ITEMS_DATA.length;
const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

// Warps a w x h rectangle onto the quad q (homography -> CSS matrix3d).
function warp(q: Quad) {
  const w = Math.max(...q.map((p) => p[0])) - Math.min(...q.map((p) => p[0]));
  const h = (q[3][1] - q[0][1] + (q[2][1] - q[1][1])) / 2;
  const src: Pt[] = [[0, 0], [w, 0], [w, h], [0, h]];
  const M: number[][] = [];
  src.forEach(([x, y], i) => {
    const [X, Y] = q[i];
    M.push([x, y, 1, 0, 0, 0, -x * X, -y * X, X]);
    M.push([0, 0, 0, x, y, 1, -x * Y, -y * Y, Y]);
  });
  for (let i = 0; i < 8; i++) {
    let p = i;
    for (let r = i + 1; r < 8; r++) if (Math.abs(M[r][i]) > Math.abs(M[p][i])) p = r;
    [M[i], M[p]] = [M[p], M[i]];
    for (let r = 0; r < 8; r++) {
      if (r === i) continue;
      const k = M[r][i] / M[i][i];
      for (let c = i; c < 9; c++) M[r][c] -= k * M[i][c];
    }
  }
  const [a, b, c, d, e, f, g, hh] = M.map((row, i) => row[8] / row[i]);
  return { w, h, transform: `matrix3d(${[a, d, 0, g, b, e, 0, hh, 0, 0, 1, 0, c, f, 0, 1].join(",")})` };
}

function place(i: number, t: number) {
  const p = (((i - t) % N) + N) % N;
  const k = p >= 9 ? 9 : Math.floor(p);
  const f = p >= 9 ? 0 : p - k;
  const kk = Math.min(k + 1, 9);
  const q = SLOTS[k].map((pt, j) => [lerp(pt[0], SLOTS[kk][j][0], f), lerp(pt[1], SLOTS[kk][j][1], f)]) as Quad;
  return {
    ...warp(q),
    opacity: lerp(OPACITY[k], OPACITY[kk], f),
    fl: lerp(FADE_L[k], FADE_L[kk], f),
    fr: lerp(FADE_R[k], FADE_R[kk], f),
  };
}

const css = `
  .fb-image-container {
    container-type: inline-size;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .fb-box {
    --s: tan(atan2(100cqw, 823px));
    position: relative;
    width: 100%;
    height: calc(586px * var(--s));
    overflow: hidden;
  }
  .fb-images {
    position: absolute;
    left: 0;
    top: 0;
    width: 823px;
    height: 586px;
    transform-origin: 0 0;
    transform: scale(var(--s));
  }
  .fb-card {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: 0 0;
    border-radius: 12px;
    overflow: hidden;
    background: var(--bg-c);
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
    will-change: transform;
  }
  .fb-card img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .fb-strip {
    position: absolute;
    inset: 0;
    user-select: none;
  }
  .fb-ov {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
  }
  .fb-ovL {
    background: linear-gradient(to right, #ffffff 0, transparent 85%);
    opacity: var(--fl, 0);
  }
  .fb-ovR {
    background: linear-gradient(to left, #ffffff 0, transparent 85%);
    opacity: var(--fr, 0);
  }
`;

export function HeroSection() {
  const portraits = [
    "https://i.pravatar.cc/300?img=33",
    "https://i.pravatar.cc/300?img=11",
    "https://i.pravatar.cc/300?img=12",
    "https://i.pravatar.cc/300?img=5",
    "https://i.pravatar.cc/300?img=15",
    "https://i.pravatar.cc/300?img=32",
    "https://i.pravatar.cc/300?img=59",
  ]

  // Attach portraits to items data
  const ITEMS = ITEMS_DATA.map((it, i) => ({
    ...it,
    src: portraits[i % portraits.length]
  }));

  const [t, setT] = useState(0);
  const tRef = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    
    const loop = (now: number) => {
      const delta = Math.min(now - lastTime, 100); // Cap delta to prevent jumps
      lastTime = now;
      
      if (!document.hidden) {
        tRef.current += delta / 1500; // Speed: 1.5 seconds per card
        setT(tRef.current);
      }
      animationFrameId = requestAnimationFrame(loop);
    };
    
    animationFrameId = requestAnimationFrame(loop);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section 
      className="w-full bg-white flex flex-col items-center justify-center min-h-[calc(100vh-72px)] py-8 md:py-12 overflow-hidden"
    >
      {/* Flowblox-style Exact Image Layout */}
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="fb-image-container relative">
        
        {/* Absolute Typography & CTA Overlay */}
        <div className="absolute top-0 left-0 w-full z-20 flex flex-col items-center text-center pointer-events-none pt-4 md:pt-8">
          {/* Typography */}
          <h1 className="flex flex-col gap-1 md:gap-2 mb-4 pointer-events-auto">
            <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy tracking-tight">
              Find Top Talent,
            </span>
            <span className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-biznorx-deep-red to-biznorx-red pb-2 md:pb-4">
              Build World-Class Teams
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-lg mx-auto mb-6 font-medium pointer-events-auto">
            The premier recruiting agency connecting ambitious professionals <br className="hidden sm:block" />
            with industry-leading companies.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
            <Button asChild className="rounded-full pl-6 pr-2 py-5 gap-3 text-sm md:text-base bg-gradient-to-r from-biznorx-red to-biznorx-deep-red hover:opacity-90 h-11 md:h-12 border-0 w-full sm:w-auto cursor-pointer">
              <Link href="/contact">
                Hire Talent
                <div className="bg-white/20 rounded-full p-1 md:p-1.5 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </Button>
            <Button asChild variant="outline" className="group rounded-full pl-6 pr-2 py-5 gap-3 text-sm md:text-base border-2 border-biznorx-navy text-biznorx-navy hover:bg-biznorx-navy hover:text-white transition-colors h-11 md:h-12 w-full sm:w-auto cursor-pointer">
              <Link href="/careers">
                Find Jobs
                <div className="bg-biznorx-navy/10 rounded-full p-1 md:p-1.5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-biznorx-navy group-hover:text-white transition-colors" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
        <div className="fb-box">
          <div className="fb-images">
            <div
              className="fb-strip"
              aria-roledescription="carousel"
              aria-label="Team photos"
            >
              {ITEMS.map((it, i) => {
                const c = place(i, t);
                return (
                  <div
                    key={i}
                    className={`fb-card${it.src ? " has-img" : ""}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-hidden={c.opacity < 0.5}
                    style={{
                      width: c.w, height: c.h, transform: c.transform,
                      opacity: c.opacity, visibility: c.opacity < 0.01 ? "hidden" : "visible",
                      "--bg-c": it.bg, "--skin": it.skin, "--cloth": it.cloth, "--fl": c.fl, "--fr": c.fr,
                    } as React.CSSProperties}
                  >
                    {it.src && <img src={it.src} alt="" draggable={false} />}
                    <div className="fb-ov fb-ovL" />
                    <div className="fb-ov fb-ovR" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container-master grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl text-center px-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-base md:text-lg text-biznorx-navy">Vetted Talent Pools</h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Access thousands of pre-screened professionals ready to make an immediate impact on your organization.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-base md:text-lg text-biznorx-navy">Streamlined Hiring</h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Our efficient process reduces time-to-hire by 40%, getting the right people in the right seats faster.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-base md:text-lg text-biznorx-navy">Perfect Culture Fit</h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            We don't just match skills; we utilize deep behavioral analysis to ensure long-term cultural alignment.
          </p>
        </div>
      </div>
    </section>
  )
}
