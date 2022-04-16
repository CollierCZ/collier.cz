import { browser } from '$app/env';
import { writable } from 'svelte/store';

const getOsPreference = () => {
  // Check if system stores preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true
  }
  // If no OS preference set
  return null
}

const defaultValue = null;

export const getStoredValue = () => {
  if (browser) {
    // If preference stored in browser
    if (localStorage.getItem('darkMode')) {
      return localStorage.getItem('darkMode') === "true"
    }

    // Otherwise, check for OS preference
    const osPreference = getOsPreference()

    if (osPreference !== null) {
      return osPreference
    }

    // If nothing set, return default
    return defaultValue
   }
  return defaultValue
}

export const darkMode = writable<boolean | null>(getStoredValue());

const checkForPreference = () => {
  if (browser) {
    if (localStorage.getItem('darkMode')) return true
    return false
  }
  return false
}

export const isPreferenceSet = writable<boolean>(checkForPreference());

darkMode.subscribe((value) => {
  if (browser && value !== null) {
    window.localStorage.setItem('darkMode', String(value));
  }
});

export default darkMode;
