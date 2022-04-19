import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = null;

const getOsPreference = () => {
  // Check if system stores preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true
  }
  // If no OS preference set
  return null
}

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

darkMode.subscribe((value) => {
  if (browser) {
    // If OS prefs not set, set mode based on value
    if (!getOsPreference()) {
      const classes = document.documentElement.classList
      if (value) {
        if (!classes.contains('dark')) {
          classes.add('dark')
        }
      } else {
        if (classes.contains('dark')) {
          classes.remove('dark')
        }
      }
    }
  }
});

export default darkMode;

const checkForPreference = () => {
  if (browser) {
    if (localStorage.getItem('darkMode')) return true
    return false
  }
  return false
}

export const isPreferenceSet = writable<boolean>(checkForPreference());

isPreferenceSet.subscribe((value) => {
  if (browser) {
    // reset things when cleared
    if (!value) {
      localStorage.removeItem('darkMode')
      darkMode.set(getStoredValue())
    }
  }
})
