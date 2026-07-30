import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { EASE } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useReducedMotion";

// The before/after divider. Spec in 05 §3.2.
//
// The divider follows a native <input type="range">, which gives keyboard arrows,
// touch and screen reader support for free. Do not rebuild this from pointer
// events (04 §8.2).
//
// Only mounted when COMPARE_IMAGES is populated — see src/assets/manifest.js.

function Picture({ image, className }) {
  return (
    <picture>
      <source srcSet={image.avif} type="image/avif" />
      <source srcSet={image.webp} type="image/webp" />
      <img
        src={image.png}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={className}
        loading="lazy"
      />
    </picture>
  );
}

export default function CompareSlider({ images }) {
  const [position, setPosition] = useState(50);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-96px" });
  const reduce = useReducedMotion();
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsNarrow(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // One hint that the thing is draggable, then silence. Never loop it.
  useEffect(() => {
    if (reduce || isNarrow || !inView) return undefined;
    const controls = animate(50, [50, 62, 50], {
      duration: 0.9,
      ease: EASE.out,
      onUpdate: (v) => setPosition(v),
    });
    return () => controls.stop();
  }, [inView, reduce, isNarrow]);

  // Below md, and whenever reduced motion is set, two stacked labelled images.
  // A drag handle over a spreadsheet screenshot at 390px is unusable (04 §5).
  if (isNarrow || reduce) {
    return (
      <div ref={ref} className="space-y-8">
        {[
          { image: images.before, label: "Before", tone: "text-before" },
          { image: images.after, label: "After", tone: "text-signal" },
        ].map((side) => (
          <figure key={side.label}>
            <figcaption className={`mb-2 font-mono text-mono-sm uppercase ${side.tone}`}>
              {side.label}
            </figcaption>
            <div className="border border-rule bg-paper-2 p-2">
              <Picture image={side.image} className="h-auto w-full" />
            </div>
          </figure>
        ))}
        <p className="sr-only">{images.description}</p>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <div className="relative select-none border border-rule bg-paper-2 p-2">
        <div className="relative overflow-hidden">
          <Picture image={images.before} className="h-auto w-full" />

          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            aria-hidden="true"
          >
            <Picture image={images.after} className="h-auto w-full" />
          </div>

          <span
            className="pointer-events-none absolute inset-y-0 w-px bg-signal"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-signal font-mono text-mono-sm text-paper"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            ↔
          </span>

          <span
            className="absolute left-4 top-4 font-mono text-mono-sm uppercase text-before transition-opacity duration-[180ms]"
            style={{ opacity: position < 18 ? 0.4 : 1 }}
          >
            Before
          </span>
          <span
            className="absolute right-4 top-4 font-mono text-mono-sm uppercase text-signal transition-opacity duration-[180ms]"
            style={{ opacity: position > 82 ? 0.4 : 1 }}
          >
            After
          </span>

          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={Math.round(position)}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Reveal the rebuilt model. Left shows the original file, right shows the rebuild."
            className="compare-input absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>

      {/* The images communicate nothing to a non-sighted reader, and "before and
          after screenshots" as alt text is useless. */}
      <p className="sr-only">{images.description}</p>
    </div>
  );
}
