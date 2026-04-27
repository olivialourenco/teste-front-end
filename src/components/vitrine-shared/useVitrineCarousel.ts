import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import type { VitrineLoadState } from './types';

type RowListCss = CSSProperties & { '--vitrine-n'?: number };

/**
 * 4 itens visíveis no desktop, track com `translate3d` em px e lista com largura (n/4)·100%.
 */
export function useVitrineCarousel(productsLength: number, loadState: VitrineLoadState) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const rowWrapRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof globalThis !== 'undefined' &&
      'matchMedia' in globalThis &&
      globalThis.matchMedia('(min-width: 1025px)').matches
  );

  const n = productsLength;
  const numPages = n > 0 ? Math.max(1, Math.ceil(n / 4)) : 1;
  const maxSlide = Math.max(0, numPages - 1);
  const showCarousel = isDesktop && n > 4;

  useEffect(() => {
    setSlideIndex(0);
  }, [n, loadState]);

  useLayoutEffect(() => {
    const el = rowWrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === el) {
          setViewportW(entry.contentRect.width);
        }
      }
    });
    ro.observe(el);
    setViewportW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, [loadState, n]);

  useEffect(() => {
    if (!('matchMedia' in globalThis)) return;
    const mq = globalThis.matchMedia('(min-width: 1025px)');
    setIsDesktop(mq.matches);
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    setSlideIndex((i) => Math.min(Math.max(0, i), maxSlide));
  }, [maxSlide, n]);

  const goPrev = useCallback(() => {
    setSlideIndex((s) => Math.max(0, s - 1));
  }, []);

  const goNext = useCallback(() => {
    setSlideIndex((s) => Math.min(maxSlide, s + 1));
  }, [maxSlide]);

  const trackStyle: CSSProperties | undefined =
    showCarousel && viewportW > 0
      ? { transform: `translate3d(-${slideIndex * viewportW}px, 0, 0)` }
      : showCarousel
        ? { transform: 'translate3d(0, 0, 0)' }
        : undefined;

  const rowListStyle: RowListCss | undefined = showCarousel
    ? {
        width: `calc(100% * ${n} / 4)`,
        '--vitrine-n': n,
      }
    : undefined;

  return {
    rowWrapRef,
    slideIndex,
    maxSlide,
    showCarousel,
    goPrev,
    goNext,
    trackStyle,
    rowListStyle,
  };
}
