// filename: components/Cursor.jsx
"use client";
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const canvasRef = useRef(null);
  const svgRef = useRef(null);
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const s = useRef({ mx: -200, my: -200, cx: -200, cy: -200, trail: [], hovered: false, clicking: false, rot: 0 });
  const raf = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const resize = () => { 
      canvas.width = window.innerWidth; 
      canvas.height = window.innerHeight; 
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = e => { 
      if (s.current.mx === -200) {
        s.current.mx = s.current.cx = e.clientX;
        s.current.my = s.current.cy = e.clientY;
      } else {
        s.current.mx = e.clientX; 
        s.current.my = e.clientY; 
      }
    };
    const onOver = e => {
      const target = e.target.closest("a, button, [data-hover], span[class*='pill'], div[class*='ps'], div[class*='prc'], a[class*='ctaButton']");
      s.current.hovered = !!target;
    };
    const onDown = () => { s.current.clicking = true; };
    const onUp = () => { s.current.clicking = false; };
    
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const LERP = 0.12, MAX_T = 18;
    function frame() {
      const c = s.current;
      // Smooth movement
      c.cx += (c.mx - c.cx) * LERP;
      c.cy += (c.my - c.cy) * LERP;
      
      c.rot += c.hovered ? 2.5 : 0.8;
      c.trail.unshift({ x: c.cx, y: c.cy });
      if (c.trail.length > MAX_T) c.trail.length = MAX_T;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Comet tail with refined opacity
      for (let i = 1; i < c.trail.length; i++) {
        const a = c.trail[i - 1], b = c.trail[i];
        const p = 1 - i / c.trail.length;
        ctx.beginPath(); 
        ctx.moveTo(a.x, a.y); 
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(181, 137, 42, ${p * (c.hovered ? 0.45 : 0.2)})`;
        ctx.lineWidth = p * (c.hovered ? 3.5 : 2.2);
        ctx.lineCap = "round"; 
        ctx.stroke();
      }
      
      if (svgRef.current) {
        // Use translate3d for hardware acceleration and perfectly sync'd movement
        svgRef.current.style.transform = `translate3d(${c.cx}px, ${c.cy}px, 0) translate(-50%, -50%)`;
        
        const sc = c.clicking ? 0.82 : c.hovered ? 1.4 : 1;
        const osc = c.hovered ? 1.6 : 1;
        
        if (innerRef.current) {
          innerRef.current.setAttribute("transform", `rotate(${c.rot}) scale(${sc})`);
        }
        if (outerRef.current) {
          outerRef.current.setAttribute("transform", `rotate(${-c.rot * 0.4}) scale(${osc})`);
        }
      }
      raf.current = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 99997, opacity: 0.8 }} />
      <div ref={svgRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 99999, willChange: "transform" }}>
        <svg width="52" height="52" viewBox="-26 -26 52 52" fill="none" style={{ overflow: "visible" }}>
          <g ref={outerRef}>
            <circle r="19" stroke="rgba(181,137,42,0.4)" strokeWidth="0.8" strokeDasharray="4 3" />
            {[0, 60, 120, 180, 240, 300].map(a => {
              const rad = (a * Math.PI) / 180;
              return (
                <line key={a}
                  x1={Math.cos(rad) * 16} y1={Math.sin(rad) * 16}
                  x2={Math.cos(rad) * 21} y2={Math.sin(rad) * 21}
                  stroke="rgba(181,137,42,0.5)" strokeWidth="0.8"
                />
              );
            })}
          </g>
          <g ref={innerRef}>
            <circle r="3.5" fill="#B5892A" />
            <line x1="-8" y1="0" x2="-5" y2="0" stroke="rgba(181,137,42,0.6)" strokeWidth="1" />
            <line x1="5" y1="0" x2="8" y2="0" stroke="rgba(181,137,42,0.6)" strokeWidth="1" />
            <line x1="0" y1="-8" x2="0" y2="-5" stroke="rgba(181,137,42,0.6)" strokeWidth="1" />
            <line x1="0" y1="5" x2="0" y2="8" stroke="rgba(181,137,42,0.6)" strokeWidth="1" />
          </g>
        </svg>
      </div>
    </>
  );
}
