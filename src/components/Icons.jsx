import React from 'react';

export function IconSteering({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 6v6m-9-9h6m6 0h6" />
    </svg>
  );
}

export function IconWhatsApp({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 2a9.98 9.98 0 00-8.647 14.992L2 22l5.176-1.356A9.975 9.975 0 0012.031 22c5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18.232a8.214 8.214 0 01-4.195-1.155l-.3-.178-3.111.816.83-3.033-.195-.311a8.216 8.216 0 116.971 3.861zm4.512-6.164c-.247-.124-1.463-.722-1.69-.805-.226-.082-.391-.124-.556.124-.165.247-.64 1.011-.784 1.258-.144.247-.289.268-.536.144-.247-.124-1.043-.385-1.986-1.226-.734-.655-1.23-1.464-1.374-1.711-.144-.247-.015-.381.108-.504.112-.111.247-.289.371-.433.124-.144.165-.247.247-.412.082-.165.041-.309-.021-.433-.062-.124-.556-1.339-.762-1.834-.2-.484-.403-.418-.556-.426l-.474-.009c-.165 0-.433.062-.659.309-.226.247-.865.845-.865 2.061 0 1.216.886 2.39 1.01 2.555.124.165 1.742 2.66 4.22 3.731.59.255 1.05.407 1.41.521.593.188 1.133.162 1.56.098.477-.071 1.463-.598 1.669-1.175.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.289z" />
    </svg>
  );
}

export function IconPhone({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
    </svg>
  );
}

export function IconArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export function IconCheck({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconMapPin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function IconExternalLink({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
