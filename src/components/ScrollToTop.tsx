"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force instant scroll to top on pathname changes
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
