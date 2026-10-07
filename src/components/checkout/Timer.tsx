"use client";

import { useEffect, useState } from "react";

export default function Timer({
  seconds = 300, // 5 minutes
  onExpire,
}: {
  seconds?: number;
  onExpire?: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire?.();
      return;
    }
    const t = setTimeout(() => setTimeLeft((x) => x - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, onExpire]);

  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  const isUrgent = timeLeft < 60;

  if (timeLeft <= 0) {
    return (
      <p className="text-sm font-mono text-ember">
        QR expired — please regenerate
      </p>
    );
  }

  return (
    <p
      className={`text-sm font-mono ${
        isUrgent ? "text-ember font-semibold animate-pulse" : "text-muted"
      }`}
    >
      Expires in {m}:{s < 10 ? `0${s}` : s}
    </p>
  );
}
