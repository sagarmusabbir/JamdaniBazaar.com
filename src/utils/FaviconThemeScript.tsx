// // src/utils/FaviconThemeScript.tsx
// export const FaviconThemeScript = () => {
//   const script = `
//     (function () {
//       try {
//         var theme = document.documentElement.getAttribute('data-theme');
//         if (!theme) return;

//         var icon = document.querySelector('link[rel="icon"]');
//         if (!icon) {
//           icon = document.createElement('link');
//           icon.rel = 'icon';
//           document.head.appendChild(icon);
//         }

//         icon.href = theme === 'dark'
//           ? '/favicon-dark.svg'
//           : '/favicon-light.svg';

//         // Watch for theme changes
//         var observer = new MutationObserver(function () {
//           var t = document.documentElement.getAttribute('data-theme');
//           icon.href = t === 'dark'
//             ? '/favicon-dark.svg'
//             : '/favicon-light.svg';
//         });

//         observer.observe(document.documentElement, {
//           attributes: true,
//           attributeFilter: ['data-theme']
//         });
//       } catch (e) {}
//     })();
//   `

//   return <script dangerouslySetInnerHTML={{ __html: script }} />
// }

// src/utils/FaviconThemeScript.tsx
import React from 'react'

// src/utils/FaviconThemeScript.tsx
// No longer used — favicon handling is now consolidated inside SystemThemeScript.
export const FaviconThemeScript = () => null
