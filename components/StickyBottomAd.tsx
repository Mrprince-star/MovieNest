'use client';

import { useState } from 'react';
import { ADS } from '@/lib/ads';

export default function StickyBottomAd() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const bannerDoc = `<!DOCTYPE html>
<html>
  <head>
    <style>body{margin:0;padding:0;background:transparent;display:flex;align-items:center;justify-content:center;}</style>
  </head>
  <body>
    <script>
      atOptions = {
        'key' : '${ADS.bannerKey}',
        'format' : 'iframe',
        'height' : ${ADS.bannerHeight},
        'width' : ${ADS.bannerWidth},
        'params' : {}
      };
    </script>
    <script src="${ADS.bannerSrc}"></script>
  </body>
</html>`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-panel border-t border-gold/20 shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
      <div className="relative flex flex-col items-center py-1">
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Close advertisement"
          className="absolute right-2 top-1 z-10 w-6 h-6 rounded-full bg-ink/80 border border-gold/20 text-bone/70 hover:text-gold flex items-center justify-center text-sm leading-none"
        >
          ×
        </button>
        <p className="text-[9px] uppercase tracking-widest text-slate-soft mb-1">Advertisement</p>
        <div className="w-full overflow-x-auto flex justify-center px-8">
          <iframe
            title="Advertisement"
            srcDoc={bannerDoc}
            width={ADS.bannerWidth}
            height={ADS.bannerHeight}
            style={{ border: 'none' }}
            sandbox="allow-scripts allow-popups allow-same-origin"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
