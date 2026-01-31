"use client";

import { useEffect, useRef } from "react";

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.dataset.loaded) return;
    container.innerHTML = `<div class="tradingview-widget-container__widget" style="width:100%;height:${height}px;"></div>`;

    const script = document.createElement("script");
    script.src = scriptUrl;

    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    container.appendChild(script);
    container.dataset.loaded = "true";

    return () => {
      if (container) {
        try {
          // Remove children safely - TradingView may have modified the DOM
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        } catch {
          // Ignore errors if DOM was already modified
        }
        delete container.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
};

export default useTradingViewWidget;
