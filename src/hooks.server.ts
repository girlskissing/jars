import type { Handle } from '@sveltejs/kit';
import { loadLocaleAsync } from '$lib/locale/i18n-util.async';
import { setLocale } from '$lib/locale/i18n-svelte';
import { detectLocale } from '$lib/locale/i18n-util';
import {
  initAcceptLanguageHeaderDetector,
} from 'typesafe-i18n/detectors';

export const handle: Handle = async ({ event, resolve }) => {
  const deafultLocale = event.cookies.get('lang') || detectLocale(initAcceptLanguageHeaderDetector(event.request)) || 'en'; // Prefer cookie; then header; then default to 'en'.
  const locale = detectLocale(() => [deafultLocale]);
  await loadLocaleAsync(locale);
  setLocale(locale);
  event.locals.locale = deafultLocale;
  return resolve(event);
};
