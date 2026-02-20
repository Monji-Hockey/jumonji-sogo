"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const SCROLL_KEY_PREFIX = "scroll-y-";
const DEBOUNCE_MS = 150;

export default function ScrollRestoration() {
  const pathname = usePathname();
  const restoreRef = useRef(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const saveScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(SCROLL_KEY_PREFIX + pathname, String(window.scrollY));
    } catch {
      // ignore
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(saveScroll, DEBOUNCE_MS);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [saveScroll]);

  useEffect(() => {
    const onPopState = () => {
      restoreRef.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (restoreRef.current) {
      restoreRef.current = false;
      try {
        const saved = sessionStorage.getItem(SCROLL_KEY_PREFIX + pathname);
        if (saved !== null) {
          const y = parseInt(saved, 10);
          if (Number.isFinite(y)) {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                window.scrollTo(0, y);
              });
            });
            return;
          }
        }
      } catch {
        // ignore
      }
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
