import { getRootElement } from './general.js'

export function getCssColorVar(name) {
  const el = getRootElement()
  const val = getComputedStyle(el).getPropertyValue(`--color-${name}`).trim()
  return val || null
}

export function cssColorExists(name) {
  return Boolean(getCssColorVar(name))
}