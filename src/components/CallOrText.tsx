"use client";

import { useEffect, useRef, useState } from "react";
import { formatPhone, telHref, smsHref } from "@/lib/phone";

/**
 * Call OR Text. The phone is this spa's whole booking system, so the phone CTA
 * cannot be dial-only — a fair share of people will ask about tonight from a
 * desk they can't talk at, and that lead is lost the moment the only option
 * opens a dialer.
 *
 * Styled in this build's language rather than the reference module's: a soft
 * linen panel, serif italics, blush hairlines. Nothing uppercase, nothing hard.
 */

type Props = {
  phone: string;
  smsBody?: string;
  /** sub-label under "Text" */
  smsHint?: string;
  variant?: "pill" | "inline";
  /** the trigger's own classes, so each placement keeps its native treatment */
  triggerClassName?: string;
  /** label inside the trigger; defaults to the formatted number */
  children?: React.ReactNode;
  /** popover alignment */
  align?: "left" | "right";
  /** the fixed mobile dock sits at the bottom of the viewport and must open upward */
  placement?: "down" | "up";
  ariaLabel?: string;
  className?: string;
};

function PhoneGlyph({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h2.9l1.4 4.1-2 1.5a13.6 13.6 0 0 0 6.5 6.5l1.5-2 4.1 1.4v2.9c0 1-.8 1.8-1.8 1.8C10.7 19.2 4.8 13.3 4.8 4.8 4.8 3.8 5.6 3 6.6 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MessageGlyph({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5.2A1.2 1.2 0 0 1 5.2 4h13.6A1.2 1.2 0 0 1 20 5.2v9.6a1.2 1.2 0 0 1-1.2 1.2H9.4L5 20.2V16h-.8A1.2 1.2 0 0 1 3 14.8V5.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function CallOrText({
  phone,
  smsBody,
  smsHint,
  variant = "pill",
  triggerClassName,
  children,
  align = "right",
  placement = "down",
  ariaLabel,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  // NOT `.wrap` — that name collides with page containers and throws the panel
  // off-screen. This root is `.cot`.
  const cotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!cotRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pretty = formatPhone(phone);

  const panel = (
    <div
      role="menu"
      className={`absolute ${
        placement === "up" ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+12px)]"
      } ${
        align === "right" ? "right-0" : "left-0"
      } z-[70] w-max min-w-[248px] rounded-[20px] border border-(--hairline) bg-linen p-1.5 shadow-[0_18px_50px_-24px_rgba(22,36,31,0.55)] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1.5 pointer-events-none"
      }`}
    >
      <a
        href={telHref(phone)}
        role="menuitem"
        onClick={() => setOpen(false)}
        className="grid grid-cols-[auto_1fr] items-center gap-3.5 rounded-[15px] px-4 py-3 text-pine transition-colors duration-300 hover:bg-sand/45"
      >
        <PhoneGlyph size={16} />
        <span>
          <strong className="display block text-[17px] font-medium">Call</strong>
          <em className="block not-italic text-[13px] leading-snug text-sand-dim">
            Straight to the front desk
          </em>
        </span>
      </a>
      <div className="mx-4 h-px bg-(--hairline)" />
      <a
        href={smsHref(phone, smsBody)}
        role="menuitem"
        onClick={() => setOpen(false)}
        className="grid grid-cols-[auto_1fr] items-center gap-3.5 rounded-[15px] px-4 py-3 text-pine transition-colors duration-300 hover:bg-sand/45"
      >
        <MessageGlyph size={16} />
        <span>
          <strong className="display block text-[17px] font-medium italic text-blush-deep">
            Text instead
          </strong>
          <em className="block not-italic text-[13px] leading-snug text-sand-dim">
            {smsHint ?? "Ask about today's openings"}
          </em>
        </span>
      </a>
    </div>
  );

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
        <a
          href={telHref(phone)}
          className="inline-flex items-center gap-2.5 rounded-full bg-pine px-6 py-3 font-medium text-linen transition-colors hover:bg-pine-3"
        >
          <PhoneGlyph /> Call {pretty}
        </a>
        <a
          href={smsHref(phone, smsBody)}
          className="inline-flex items-center gap-2.5 rounded-full border border-(--hairline-dark) px-6 py-3 font-medium text-pine transition-colors hover:border-blush-deep hover:text-blush-deep"
        >
          <MessageGlyph /> <span className="display italic">Or text us</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`cot relative ${className ?? ""}`} ref={cotRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={ariaLabel ?? `Call or text Top Health Spa at ${pretty}`}
        onClick={() => setOpen((v) => !v)}
        className={triggerClassName}
      >
        {children ?? (
          <>
            <PhoneGlyph />
            {pretty}
          </>
        )}
      </button>
      {panel}
    </div>
  );
}
