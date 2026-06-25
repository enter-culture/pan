'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void
        LatLng: new (lat: number, lng: number) => unknown
        Map: new (container: HTMLElement, options: { center: unknown; level: number }) => unknown
        Marker: new (options: { position: unknown }) => { setMap: (map: unknown) => void }
      }
    }
  }
}

interface FestivalMapProps {
  latitude: number
  longitude: number
  name: string
}

export function FestivalMap({ latitude, longitude, name }: FestivalMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = () => {
      if (!containerRef.current) return
      const coords = new window.kakao.maps.LatLng(latitude, longitude)
      const map = new window.kakao.maps.Map(containerRef.current, {
        center: coords,
        level: 4,
      })
      const marker = new window.kakao.maps.Marker({ position: coords })
      marker.setMap(map)
    }

    if (window.kakao?.maps) {
      window.kakao.maps.load(initMap)
    }
  }, [latitude, longitude])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '220px', borderRadius: '12px', overflow: 'hidden' }}
    />
  )
}
