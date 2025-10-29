import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.75 2.75a.75.75 0 00-1.5 0V5.5h-2a.75.75 0 000 1.5h2V9.5h-2a.75.75 0 000 1.5h2V13.5h-2a.75.75 0 000 1.5h2V17.5h-2a.75.75 0 000 1.5h2v2.75a.75.75 0 001.5 0V18.5h2.25a.75.75 0 000-1.5H12.75V14.5h2.25a.75.75 0 000-1.5H12.75V10.5h2.25a.75.75 0 000-1.5H12.75V6.5h2.25a.75.75 0 000-1.5H12.75V2.75z" />
    <path fillRule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zM1.5 12a10.5 10.5 0 1121 0 10.5 10.5 0 01-21 0z" clipRule="evenodd" />
  </svg>
);

export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const EfficiencyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.23 13.63a3.375 3.375 0 004.773 4.773l.417-.416z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l-4.707 4.707A3.375 3.375 0 007.586 21H9.5a2.25 2.25 0 002.25-2.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 01-.75.75H7.586a1.875 1.875 0 01-1.328-.543L9 12z" />
    </svg>
);

export const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

export const GrowthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94-3.94m3.94 3.94l-3.94-3.94" />
    </svg>
);

export const DataIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V5.25A2.25 2.25 0 0018 3H6A2.25 2.25 0 003.75 5.25v12.75A2.25 2.25 0 006 20.25z" />
    </svg>
);

// FIX: Added CrmIcon to be used in Features.tsx.
export const CrmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>
);

// FIX: Added ErpIcon to be used in Features.tsx.
export const ErpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

export const InnovatechLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 120 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.33 24V1.4h3.18v18.34h9.8v4.26h-12.98zM31.13 24V1.4h3.18v22.6h-3.18zM41.73 24V1.4h11.2c2.9 0 5.13.5 6.67 1.5s2.32 2.5 2.32 4.52c0 1.5-.4 2.77-1.2 3.8-1.04 1.3-2.88 2-5.52 2.14v.13c2.4.17 4.2.85 5.37 2.02 1.17 1.18 1.76 2.8 1.76 4.9v.06c0 2.45-.8 4.2-2.4 5.22-1.6 1.03-3.9 1.54-6.9 1.54h-11.2zm3.18-13.6h7.32c2.18 0 3.7-.33 4.6-1 .9-.65 1.34-1.6 1.34-2.8 0-1.2-.4-2.1-1.2-2.7-.8-.6-2.2-.9-4.2-.9h-7.86v7.4zm0 9.34h7.96c2.5 0 4.1-.38 4.8-.9.7-.54 1.06-1.5 1.06-2.9v-.06c0-1.4-.4-2.5-1.2-3.2-.8-.7-2.3-1.08-4.5-1.08h-8.12v8.14zM83.4 24l-6.4-9.6L70.4 24h-3.7l8.5-12.3-8.2-11.3h3.7l6.2 9.1 6.1-9.1h3.7L80.4 11.7l8.5 12.3H83.4zM95.83 24V1.4h3.18v22.6h-3.18zM102.73 24V1.4h3.18v18.34h9.8v4.26h-12.98z" fill="currentColor"/></svg>
);

export const NexusLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 120 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M0 24.1v-23h5.7l13 18.5V1.1h5.3v23H18.3L5.3 5.6v18.5H0zM35.6 24.1l-4.5-6.4-9.9 6.4h-4.5l12-11.5L25.4 1.1h4.6l4.4 6.2 9.7-6.2h4.5L41.3 12.6l13.4 11.5h-4.6zM76.2 24.1v-23h18c4.3 0 7.4 1.1 9.4 3.4s3 5.5 3 9.6-1 7.3-3 9.6-5.1 3.4-9.4 3.4h-18zm5.2-4.5h12.1c5.4 0 8.1-2.6 8.1-7.8s-2.7-7.8-8.1-7.8H81.4v15.6zM114.7 24.1l-6.2-9.2-6.2 9.2h-5.2l8.8-12.4-8.8-11.6h5.2l6.2 9.1 6.2-9.1h5.2l-8.8 11.6 8.8 12.4h-5.2z" fill="currentColor"/></svg>
);

export const QuantumLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 120 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.6 24.1C6.4 24.1 0 18.7 0 12S6.4 0 14.6 0c8.2 0 14.6 5.4 14.6 12s-6.4 12.1-14.6 12.1zm0-4.5c5.4 0 9.4-3.1 9.4-7.6s-4-7.6-9.4-7.6-9.4 3.1-9.4 7.6 4 7.6 9.4 7.6zM32.5 23.5V0h5.2v23.5h-5.2zM45.6 24.1v-23h5.3l10.3 14.2V1.1h5.2v23h-5.3L50.8 9.9v14.2h-5.2zM81.5 24.1v-19h-9.3V1.1h23.7v4h-9.2v19h-5.2zM102.7 24.1c-4.9 0-8.1-1.6-9.8-4.8l4.6-2.6c.9 2.1 2.5 3.2 5.3 3.2 2.9 0 4.8-1.4 4.8-3.5 0-2.3-1.6-3.2-5.4-4.2-5.2-1.4-8.3-3.6-8.3-8.2 0-4.1 3.5-7.2 9.1-7.2 4.4 0 7.3 1.5 9 4.3l-4.5 2.8c-.8-1.7-2.1-2.5-4.5-2.5-2.4 0-3.9 1.2-3.9 3.2 0 2.2 1.4 3 5.4 4.1 5.4 1.4 8.3 3.8 8.3 8.3 0 4.4-3.7 7.7-9.5 7.7z" fill="currentColor"/></svg>
);

export const StellarLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 120 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.3 4.5h-5L5.7 18l-2.6-13.5H.5L5 24h3.6l2.4-12.7L13.4 24h3.6l4.5-19.5h-2.6L16.3 18l-3-13.5zM38.8 24.1c-8.2 0-14.6-5.4-14.6-12S30.6 0 38.8 0c8.2 0 14.6 5.4 14.6 12s-6.4 12.1-14.6 12.1zm0-4.5c5.4 0 9.4-3.1 9.4-7.6s-4-7.6-9.4-7.6-9.4 3.1-9.4 7.6 4 7.6 9.4 7.6zM61 23.5V0h5.2v19h10.8v4.5H61zM91.8 4.5h-5.4L80.5 15.6V4.5h-5.2v19.6h5.2l11.2-11.4v11.4h5.2V4.5h-5.1zM107.4 23.5V0h5.2v23.5h-5.2z" fill="currentColor"/></svg>
);

export const StellarLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 120 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.3 4.5h-5L5.7 18l-2.6-13.5H.5L5 24h3.6l2.4-12.7L13.4 24h3.6l4.5-19.5h-2.6L16.3 18l-3-13.5zM38.8 24.1c-8.2 0-14.6-5.4-14.6-12S30.6 0 38.8 0c8.2 0 14.6 5.4 14.6 12s-6.4 12.1-14.6 12.1zm0-4.5c5.4 0 9.4-3.1 9.4-7.6s-4-7.6-9.4-7.6-9.4 3.1-9.4 7.6 4 7.6 9.4 7.6zM61 23.5V0h5.2v19h10.8v4.5H61zM91.8 4.5h-5.4L80.5 15.6V4.5h-5.2v19.6h5.2l11.2-11.4v11.4h5.2V4.5h-5.1zM107.4 23.5V0h5.2v23.5h-5.2z" fill="currentColor"/></svg>
);

export const GoogleLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.24 10.285V11.69h6.09c-.21 1.42-.82 2.5-1.77 3.25l-1.17 1.07 4.71 3.63 1.07.09c3.17-2.91 5.02-7.27 5.02-12.02 0-.79-.07-1.54-.2-2.27H12.24z" fill="#4285F4"/>
    <path d="M12.24 24c3.23 0 5.95-1.07 7.93-2.92l-5.8-4.48c-1.62 1.09-3.73 1.73-5.88 1.73-4.52 0-8.34-3.05-9.7-7.18l-1.18.09-4.57 3.53-.09 1.18c1.72 3.43 5.37 5.86 9.61 5.86z" fill="#34A853"/>
    <path d="M2.54 14.32c-.25-.76-.39-1.57-.39-2.39 0-.82.14-1.63.39-2.39L1.36 8.3l-.09 1.18-4.57-3.53-.09-1.18C-.07 7.27-.2 8.02-.2 8.81c0 4.75 1.85 9.11 5.02 12.02l.09-1.07 4.71-3.63 1.17-1.07c-1.62-1.09-2.5-2.5-2.5-4.18z" fill="#FBBC05"/>
    <path d="M12.24 4.18c2.48 0 4.17 1.02 5.12 1.95l4.09-3.97C19.19.98 15.96 0 12.24 0c-4.24 0-7.89 2.43-9.61 5.86l5.8 4.48c1.36-4.13 5.18-7.18 9.7-7.18z" fill="#EA4335"/>
  </svg>
);

export const MicrosoftLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.4 11.4H0V0h11.4v11.4zm0 12.6H0V12.6h11.4v11.4zm12.6 0H12.6V12.6h11.4v11.4zm0-12.6H12.6V0h11.4v11.4z"/>
  </svg>
);

export const AmazonLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.998 8.437c.002 1.57-.99 2.61-2.48 2.61-1.48 0-2.48-1.04-2.48-2.61 0-1.57.99-2.61 2.48-2.61 1.49 0 2.48 1.04 2.48 2.61zm-2.48 4.01c-2.48 0-4.13 1.65-4.13 4.01 0 2.36 1.65 4.01 4.13 4.01 2.48 0 4.13-1.65 4.13-4.01 0-2.36-1.65-4.01-4.13-4.01zm-1.65-8.02c0-1.57.99-2.61 2.48-2.61 1.49 0 2.48 1.04 2.48 2.61 0 1.57-.99 2.61-2.48 2.61-1.49 0-2.48-1.04-2.48-2.61zm-2.48 4.01c-2.48 0-4.13 1.65-4.13 4.01 0 2.36 1.65 4.01 4.13 4.01 2.48 0 4.13-1.65 4.13-4.01 0-2.36-1.65-4.01-4.13-4.01z"/>
  </svg>
);

export const AppleLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6zm0 14c-4.418 0-8 3.582-8 8 0 .552.448 1 1 1h14c.552 0 1-.448 1-1 0-4.418-3.582-8-8-8z"/>
  </svg>
);

export const MetaLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.5 17.5h-2.5v-11h2.5v11zm5 0h-2.5v-11h2.5v11zm-2.5-14c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5z"/>
  </svg>
);

export const NetflixLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.5 12c0 4.142-3.358 7.5-7.5 7.5s-7.5-3.358-7.5-7.5 3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5zm-7.5 5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm0-10c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"/>
  </svg>
);

export const TeslaLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.5 17.5h-2.5v-11h2.5v11zm5 0h-2.5v-11h2.5v11zm-2.5-14c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5z"/>
  </svg>
);

export const SamsungLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.5 17.5h-2.5v-11h2.5v11zm5 0h-2.5v-11h2.5v11zm-2.5-14c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5z"/>
  </svg>
);

export const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-9.57v3.543c-3.731 0-5.385 1.517-5.385 4.483h5.385v9.025h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9.983-9.57v3.543c-3.748 0-5.385 1.517-5.385 4.483h5.385v9.025h-9.983z"/>
  </svg>
);

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const MinusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

export const SheetsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

export const SlackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 122.8 122.8" {...props}>
        <path fill="#e01e5a" d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm-12.9-20.7c-7.1 0-12.9-5.8-12.9-12.9S5.8 31.1 12.9 31.1s12.9 5.8 12.9 12.9v12.9H12.9z" />
        <path fill="#e01e5a" d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm20.7-12.9c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H65.9V12.9z" />
        <path fill="#36c5f0" d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm12.9 20.7c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V65.9h12.9z" />
        <path fill="#36c5f0" d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm-20.7 12.9c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9 5.8-12.9 12.9-12.9h12.9v12.9z" />
        <path fill="#2eb67d" d="M45.2 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm-12.9-20.7c0-7.1-5.8-12.9-12.9-12.9S19.4 69.2 19.4 76.3s5.8 12.9 12.9 12.9h12.9V76.3z" />
        <path fill="#2eb67d" d="M77.6 45.2c0-7.1-5.8-12.9-12.9-12.9s-12.9 5.8-12.9 12.9s5.8 12.9 12.9 12.9h12.9V45.2zm-12.9-20.7c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V19.4h12.9z" />
        <path fill="#ecb22e" d="M25.8 45.2c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9 12.9 5.8 12.9 12.9v12.9H25.8zm20.7-12.9c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H46.5V32.3z" />
        <path fill="#ecb22e" d="M97 77.6c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9 5.8-12.9 12.9-12.9h12.9v12.9zm-12.9 20.7c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9 12.9 5.8 12.9 12.9v12.9H84.1z" />
    </svg>
);

export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
    </svg>
);

export const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
);

export const FolderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);

export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.407 0-6.17 2.764-6.17 6.17 0 .485.055.953.15 1.404-5.133-.258-9.661-2.724-12.697-6.457-.528.909-.833 1.961-.833 3.102 0 2.142 1.092 4.02 2.75 5.115-.807-.025-1.568-.247-2.23-.616v.075c0 2.99 2.13 5.488 4.95 6.05-.528.144-1.083.22-1.65.22-.403 0-.795-.04-1.176-.115.79 2.45 3.06 4.23 5.77 4.27-2.01 1.577-4.54 2.52-7.29 2.52-.47 0-.93-.027-1.38-.08 2.76.76 6.04 1.208 9.58 1.208 11.5 0 17.81-9.547 17.81-17.81 0-.27-.006-.539-.019-.807.97-.7 1.818-1.574 2.486-2.572z"/>
  </svg>
);

export const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.908c0-.817.092-1.092 1.092-1.092h3.908v-3h-4.738c-4.501 0-5.262 3.002-5.262 4.908v2.092z"/>
  </svg>
);

export const WhatsappIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.486 5.236 3.486 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.923 3.576 1.442 5.591 1.442 5.45 0 9.91-4.462 9.91-9.913 0-5.45-4.46-9.912-9.91-9.912-5.452 0-9.911 4.462-9.911 9.913 0 1.821.53 3.538 1.443 5.064l-.957 3.492 3.492-.957zm7.518-2.544c-.105-.049-.652-.323-.757-.364-.106-.04-.181-.06-.256.06-.075.124-.289.364-.354.439-.066.075-.131.08-.246.03-.115-.049-.484-.177-1.09-.67-.606-.495-1.015-1.102-1.13-1.29-.115-.189-.01-.274.049-.349.059-.076.13-.181.196-.275.065-.094.08-.16.049-.245-.049-.084-.44-.994-.606-1.375-.167-.375-.335-.325-.46-.33-.125-.006-.266-.006-.41-.006-.144 0-.375.059-.57.299-.195.24-.742.729-.742 1.772 0 1.042.761 2.05 1.09 2.472.329.422 1.404 2.159 3.304 2.977 1.899.818 2.332.605 2.754.564.422-.04.757-.16.962-.299.205-.139.652-.456.747-.729.095-.274.095-.509.06-.605-.04-.084-.105-.139-.21-.189z"/>
  </svg>
);
