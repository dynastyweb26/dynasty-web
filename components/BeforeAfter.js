"use client";

import { useState } from "react";
import Image from "next/image";

// Drag/keyboard before–after comparison. The "after" image sits on top and
// is clipped; a native range input drives it, so touch and keyboard work.
export function BeforeAfter({ before, after }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="ba-frame" style={{ "--ba-pos": `${pos}%` }}>
      <Image
        src={before.src}
        alt={before.alt}
        width={before.w}
        height={before.h}
        sizes="(min-width: 900px) 560px, 100vw"
        className="ba-img"
      />
      <div className="ba-after" aria-hidden={pos <= 0}>
        <Image
          src={after.src}
          alt={after.alt}
          width={after.w}
          height={after.h}
          sizes="(min-width: 900px) 560px, 100vw"
          className="ba-img"
        />
      </div>
      <div className="ba-divider" aria-hidden="true">
        <span className="ba-handle">↔</span>
      </div>
      <span className="ba-tag ba-tag-before">Before</span>
      <span className="ba-tag ba-tag-after">After</span>
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="ba-range"
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
