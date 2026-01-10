// src/utils/SystemThemeScript.tsx
import React from 'react'

export const SystemThemeScript: React.FC = () => {
  const scriptContent = `
    (function () {
      try {
        function ensureLink(rel, media, href) {
          try {
            var link = document.querySelector('link[rel="' + rel + '"][media="' + media + '"]');
            if (!link) {
              link = document.createElement('link');
              link.rel = rel;
              link.media = media;
              link.type = 'image/svg+xml';
              link.href = href;
              document.head.appendChild(link);
            } else {
              link.href = href;
              link.type = 'image/svg+xml';
            }
          } catch (e) {}
        }

        // Prefer media-specific icons so the browser picks the right one automatically
        ensureLink('icon', '(prefers-color-scheme: dark)', '/favicon-dark.svg');
        ensureLink('icon', '(prefers-color-scheme: light)', '/favicon-light.svg');

        // Fallback icon (no media attribute)
        try {
          var fallback = document.querySelector('link[rel="icon"]:not([media])');
          if (!fallback) {
            fallback = document.createElement('link');
            fallback.rel = 'icon';
            fallback.type = 'image/svg+xml';
            fallback.href = '/favicon.svg';
            document.head.appendChild(fallback);
          } else {
            fallback.href = '/favicon.svg';
          }
        } catch (e) {}

        // Set data-theme based on system preference
        var mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
        function applyDataTheme(matches) {
          try { document.documentElement.setAttribute('data-theme', matches ? 'dark' : 'light'); } catch (e) {}
        }

        // Also set the default (non-media) favicon according to current preference — some browsers prefer the non-media icon
        function setDefaultIcon(matches) {
          try {
            var href = matches ? '/favicon-dark.svg' : '/favicon-light.svg';
            var defaultLink = document.querySelector('link[rel="icon"]:not([media])');
            if (!defaultLink) {
              defaultLink = document.createElement('link');
              defaultLink.rel = 'icon';
              defaultLink.type = 'image/svg+xml';
              document.head.appendChild(defaultLink);
            }
            // Add version query to avoid aggressive caching
            defaultLink.href = href + '?v=1';
          } catch (e) {}
        }

        applyDataTheme(mql && mql.matches);
        setDefaultIcon(mql && mql.matches);

        if (mql && mql.addEventListener) {
          mql.addEventListener('change', function (e) { applyDataTheme(e.matches); setDefaultIcon(e.matches); });
        } else if (mql && mql.addListener) {
          mql.addListener(function (e) { applyDataTheme(e.matches); setDefaultIcon(e.matches); });
        }
      } catch (e) {}
    })();
  `

  return <script dangerouslySetInnerHTML={{ __html: scriptContent }} />
}
