'use client';

import { ADS } from '@/lib/ads';

type Props = {
  variant?: 'banner' | 'native';
};

export default function AdBanner({ variant = 'banner' }: Props) {
  if (variant === 'native') {
    const nativeDoc = `<!DOCTYPE html>
<html>
  <head>
    <style>body{margin:0;padding:0;background:transparent;}</style>
  </head>
  <body>
    <div id="${ADS.nativeContainerId}"></div>
    <script async data-cfasync="false" src="${ADS.nativeSrc}"></script>
  </body>
</html>`;

    return (
      <div className="my-8 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] uppercase tracking-widest text-slate-soft mb-2">
          Advertisement
        </p>
        <div className="rounded-lg border border-gold/10 bg-panel/30 p-2 overflow-x-auto">
          <iframe
            title="Advertisement"
            srcDoc={nativeDoc}
            style={{ width: '100%', minHeight: 250, border: 'none', display: 'block' }}
            sandbox="allow-scripts allow-popups allow-same-origin"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

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
    <div className="my-8 flex flex-col items-center px-4">
      <p className="text-center text-[10px] uppercase tracking-widest text-slate-soft mb-2">
        Advertisement
      </p>
      <div className="rounded-lg border border-gold/10 bg-panel/30 p-2 overflow-x-auto max-w-full">
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
  );
}
