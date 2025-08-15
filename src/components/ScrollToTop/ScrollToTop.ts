import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ smooth = true, container = "window" }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // غیر فعال کردن بازگردانی اسکرول
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const behavior = smooth ? "smooth" : "auto";

    const scrollEl =
      container === "window"
        ? document.scrollingElement || document.documentElement
        : document.querySelector(container);

    if (scrollEl) {
      requestAnimationFrame(() => {
        scrollEl.scrollTo({ top: 0, left: 0, behavior });
        // برای Safari یک فراخوانی دوم هم کمک می‌کنه
        setTimeout(() => {
          scrollEl.scrollTo({ top: 0, left: 0, behavior });
        }, 50);
      });
    }
  }, [location.key, container, smooth]);

  return null;
};

export default ScrollToTop;
