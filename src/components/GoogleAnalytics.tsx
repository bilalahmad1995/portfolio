import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

function ensureGtagLoaded(id: string) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }

  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${id}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(script)
  }

  window.gtag('js', new Date())
  window.gtag('config', id, {
    anonymize_ip: true,
    send_page_view: false,
  })
}

export function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (!measurementId) return
    ensureGtagLoaded(measurementId)
  }, [])

  useEffect(() => {
    if (!measurementId || typeof window === 'undefined' || !window.gtag) return

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${location.pathname}${location.search}${location.hash}`,
    })
  }, [location.hash, location.pathname, location.search])

  return null
}
