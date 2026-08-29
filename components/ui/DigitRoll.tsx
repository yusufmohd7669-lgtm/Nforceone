"use client";

import React from "react";
import { useDigitRoll, UseDigitRollOptions } from "@/hooks/useDigitRoll";

interface DigitRollProps extends UseDigitRollOptions {
  value: number | string;
  prefix?: string;
  suffix?: string;
  className?: string;
  digitClassName?: string;
}

export function DigitRoll({
  value,
  prefix = "",
  suffix = "",
  startValue = 0,
  className = "",
  digitClassName = "",
  ...rollOptions
}: DigitRollProps) {
  const { containerRef, registerColumn, targetSlots } = useDigitRoll(value, {
    startValue,
    ...rollOptions,
  });

  return (
    <span
      ref={containerRef}
      className={`inline-flex items-baseline font-mono tabular-nums select-none ${className}`}
    >
      {prefix && <span className="mr-0.5 text-accent">{prefix}</span>}

      {targetSlots.map((slot, i) =>
        slot.type === "static" ? (
          <span key={i} className="mx-px">
            {slot.value}
          </span>
        ) : (
          <span
            key={i}
            className={`relative inline-block h-[1.15em] w-[0.62em] overflow-hidden align-baseline ${digitClassName}`}
          >
            <span
              ref={registerColumn}
              className="absolute left-0 top-0 block will-change-transform"
            >
              {Array.from({ length: 10 }).map((_, d) => (
                <span
                  key={d}
                  className="block h-[1.15em] leading-[1.15em] text-center"
                >
                  {d}
                </span>
              ))}
            </span>
          </span>
        )
      )}

      {suffix && <span className="ml-0.5 text-accent">{suffix}</span>}
    </span>
  );
}
export default DigitRoll;
