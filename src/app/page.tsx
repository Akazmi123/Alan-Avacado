"use client";
import Image from "next/image";
import { HomePage } from "../../pages-partial/first-page";
import { SecondPage } from "../../pages-partial/second-page";
import { ThirdPage } from "../../pages-partial/third-page";
import { FourthPage } from "../../pages-partial/fourth-page";
import { FifthPage } from "../../pages-partial/fifth-page";
import { SixthPage } from "../../pages-partial/sixth-page";
import { SeventhPage } from "../../pages-partial/seventh-page";
import { EighthPage } from "../../pages-partial/eight-page";
import { NinethPage } from "../../pages-partial/nineth-page";
import { TenthPage } from "../../pages-partial/tenth-page";
import { EleventhPage } from "../../pages-partial/eleventh-page";
import { TewelvethPage } from "../../pages-partial/tewelveth-page";
import { ThirtenthPage } from "../../pages-partial/thirtienth-page";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheelElement = (e: WheelEvent) => {
      // Convert vertical wheel to horizontal; preserve native horizontal deltas
      const isTrackpadLike = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (isTrackpadLike) return; // let native horizontal scrolling happen

      e.preventDefault();
      const scrollAmount = e.deltaY;
      try {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } catch {
        // Fallback for older browsers
        container.scrollLeft += scrollAmount;
      }
    };

    const onWheelWindow = (e: WheelEvent) => {
      // If the pointer is within the container bounds, reroute vertical wheel to horizontal
      const rect = container.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) return;

      const isTrackpadLike = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (isTrackpadLike) return; // allow native horizontal

      e.preventDefault();
      const scrollAmount = e.deltaY;
      try {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } catch {
        container.scrollLeft += scrollAmount;
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (!container) return;

      // Do not hijack keys while typing in inputs or editable content
      if (target) {
        const tag = target.tagName;
        const isFormField =
          tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
        const isEditable = (target as HTMLElement).isContentEditable;
        if (isFormField || isEditable) return;
      }

      const viewWidth = container.clientWidth || window.innerWidth;
      const pageDelta = Math.max(1, Math.round(viewWidth * 0.9));

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown": {
          e.preventDefault();
          try {
            container.scrollBy({ left: pageDelta, behavior: "smooth" });
          } catch {
            container.scrollLeft += pageDelta;
          }
          break;
        }
        case "ArrowLeft":
        case "ArrowUp": {
          e.preventDefault();
          try {
            container.scrollBy({ left: -pageDelta, behavior: "smooth" });
          } catch {
            container.scrollLeft -= pageDelta;
          }
          break;
        }
        case "PageDown": {
          e.preventDefault();
          try {
            container.scrollBy({ left: viewWidth, behavior: "smooth" });
          } catch {
            container.scrollLeft += viewWidth;
          }
          break;
        }
        case "PageUp": {
          e.preventDefault();
          try {
            container.scrollBy({ left: -viewWidth, behavior: "smooth" });
          } catch {
            container.scrollLeft -= viewWidth;
          }
          break;
        }
        case "Home": {
          e.preventDefault();
          try {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } catch {
            container.scrollLeft = 0;
          }
          break;
        }
        case "End": {
          e.preventDefault();
          const maxLeft = container.scrollWidth - container.clientWidth;
          try {
            container.scrollTo({ left: maxLeft, behavior: "smooth" });
          } catch {
            container.scrollLeft = maxLeft;
          }
          break;
        }
        case " ": {
          // Space
          e.preventDefault();
          const delta = e.shiftKey ? -viewWidth : viewWidth;
          try {
            container.scrollBy({ left: delta, behavior: "smooth" });
          } catch {
            container.scrollLeft += delta;
          }
          break;
        }
      }
    };

    // Focus container only if nothing else is focused (e.g., on initial load)
    if (document.activeElement === document.body) {
      try {
        container.focus({ preventScroll: true });
      } catch {
        // ignore
      }
    }

    container.addEventListener("wheel", onWheelElement, { passive: false });
    window.addEventListener("wheel", onWheelWindow, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      container.removeEventListener("wheel", onWheelElement as EventListener);
      window.removeEventListener("wheel", onWheelWindow as EventListener);
      window.removeEventListener("keydown", onKeyDown as EventListener);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="flex w-[100vw] h-[100vh] overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
        tabIndex={0}
        aria-label="Horizontal sections container"
      >
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <HomePage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <SecondPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <ThirdPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <FourthPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <ThirdPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <FourthPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <FifthPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <SixthPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <SeventhPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <EighthPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <NinethPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <TenthPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <EleventhPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <TewelvethPage />
        </section>
        <section className="min-w-[100vw] h-[100vh] snap-start">
          <ThirtenthPage />
        </section>
      </div>
    </>
  );
}
