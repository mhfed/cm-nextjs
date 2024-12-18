import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;
    const threshold = 10; // Ngưỡng tối thiểu để trigger (px)

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const difference = Math.abs(currentScrollY - lastScrollTop);

          // Chỉ xử lý khi scroll đủ ngưỡng
          if (difference > threshold) {
            if (currentScrollY > lastScrollTop && currentScrollY > 100) {
              // Scrolling down
              setIsScrollingDown(true);
            } else {
              // Scrolling up
              setIsScrollingDown(false);
            }
            lastScrollTop = currentScrollY;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrollingDown;
}
