"use client";

import { useEffect, useRef, useState } from "react";

const SIZE = 30;
const HALF = SIZE / 2;
const LERP_POS = 0.1;
const LERP_SCALE = 0.04;

export function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [skip, setSkip] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -SIZE, y: -SIZE });
  const target = useRef({ x: -SIZE, y: -SIZE });
  const scale = useRef(1);
  const targetScale = useRef(1);
  const seenMove = useRef(false);
  const raf = useRef<number>(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Touch-only: (hover: none) = no hover capability = mobile/tablet
    const touchOnly = window.matchMedia("(hover: none)").matches;
    if (reducedMotion || touchOnly) setSkip(true);
  }, []);

  useEffect(() => {
    if (skip) return;

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * LERP_POS;
      pos.current.y += (target.current.y - pos.current.y) * LERP_POS;
      scale.current += (targetScale.current - scale.current) * LERP_SCALE;

      if (elRef.current) {
        elRef.current.style.transform = `translate(${pos.current.x - HALF}px, ${pos.current.y - HALF}px) scale(${scale.current.toFixed(3)})`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      if (!seenMove.current) {
        // Snap to cursor on first move — prevents flying in from corner
        pos.current = { x: e.clientX, y: e.clientY };
        target.current = { x: e.clientX, y: e.clientY };
        seenMove.current = true;
      } else {
        target.current = { x: e.clientX, y: e.clientY };
      }
      setVisible(true);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setVisible(false), 900);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => { targetScale.current = 0.65; };
    const onUp = () => {
      targetScale.current = 1;
      // Reset idle timer so circle doesn't fade after click
      setVisible(true);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setVisible(false), 900);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
      clearTimeout(idleTimer.current);
    };
  }, [skip]);

  if (skip) return null;

  return (
    <div
      ref={elRef}
      className="fixed pointer-events-none z-50 rounded-full"
      style={{
        width: SIZE,
        height: SIZE,
        left: 0,
        top: 0,
        border: "1.5px solid var(--fg)",
        opacity: visible ? 0.28 : 0,
        transition: "opacity 0.3s ease-out",
      }}
    />
  );
}
