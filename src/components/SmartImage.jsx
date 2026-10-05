import { useState } from 'react'

// Renders the image if it exists, otherwise falls back to `fallback`.
export default function SmartImage({ src, alt, className = '', fallback }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) return fallback
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}
