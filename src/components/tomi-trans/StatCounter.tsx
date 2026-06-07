import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [value, visible]);

  return (
    <div ref={ref} className="glass-panel p-5 sm:p-6">
      <div className="metric-value">
        {count}
        {suffix}
      </div>
      <p className="metric-label">{label}</p>
    </div>
  );
}
