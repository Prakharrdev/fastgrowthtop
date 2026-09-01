"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface UseCarouselOptions {
  totalItems: number;
  itemsPerView: number;
  gap?: number;
}

export function useCarousel({ totalItems, itemsPerView, gap = 24 }: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const maxIndex = Math.max(0, totalItems - itemsPerView);
  const totalPages = Math.ceil(totalItems / itemsPerView);
  const currentPage = Math.floor(currentIndex / itemsPerView);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
  }, [maxIndex]);

  const next = useCallback(() => {
    goTo(currentIndex + itemsPerView);
  }, [currentIndex, itemsPerView, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex - itemsPerView);
  }, [currentIndex, itemsPerView, goTo]);

  const goToPage = useCallback((page: number) => {
    goTo(page * itemsPerView);
  }, [itemsPerView, goTo]);

  // Touch / drag handling
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = currentIndex;
  }, [currentIndex]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const dx = e.clientX - startX.current;
    const containerWidth = containerRef.current.offsetWidth;
    const threshold = containerWidth * 0.15;

    if (Math.abs(dx) > threshold) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
      isDragging.current = false;
    }
  }, [next, prev]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Touch handling for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartX = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const dx = touchEndX - touchStartX;
      const threshold = container.offsetWidth * 0.15;

      if (Math.abs(dx) > threshold) {
        if (dx < 0) {
          setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
        } else {
          setCurrentIndex(prev => Math.max(prev - 1, 0));
        }
      }
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [maxIndex]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return {
    currentIndex,
    currentPage,
    totalPages,
    canGoPrev,
    canGoNext,
    next,
    prev,
    goToPage,
    trackRef,
    containerRef,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
    },
  };
}
