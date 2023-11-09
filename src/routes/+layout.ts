import { browser } from '$app/environment';
import type { LayoutLoad } from './$types';
import { setLocale } from '$lib/locale/i18n-svelte';
import { detectLocale } from '$lib/locale/i18n-util';
import { loadLocaleAsync } from '$lib/locale/i18n-util.async';
import { documentCookieDetector, navigatorDetector } from 'typesafe-i18n/detectors';

export const load: LayoutLoad = async (event) => {
  if (browser) {
    const deafultLocale = 'en';
    const locale =
      detectLocale(documentCookieDetector) || detectLocale(navigatorDetector) || deafultLocale; // Prefer cookie; then navigator; then default to 'en'.

    await loadLocaleAsync(locale);
    setLocale(locale);
    // For future implementation, the locale switcher should write a code to the lang cookie. Cookie should be insecure.
  }
  return event.data;
};
