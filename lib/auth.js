
export function getCookieName(){ return process.env.ADMIN_COOKIE_NAME || "gd_admin_session"; }
export function isValidPassword(password){ return password === (process.env.ADMIN_PASSWORD || "change-this-password"); }
export function createSessionValue(password){ const secret = process.env.ADMIN_SECRET || "dev-secret"; return `gd:${password}:${secret}`; }
export function isValidSession(sessionValue){ const actual = process.env.ADMIN_PASSWORD || "change-this-password"; return sessionValue === createSessionValue(actual); }
