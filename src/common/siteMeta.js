export const SITE_TITLE = 'Jesel Cura | Client Success, Property Management & E‑Commerce Support Professional';

export function titleFor(pageName) {
  if (!pageName || typeof pageName !== 'string') return SITE_TITLE;
  return `${pageName} - ${SITE_TITLE}`;
}
