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
    const script = document.createElement('script')
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!containerRef.current) return
        const coords = new window.kakao.maps.LatLng(latitude, longitude)
        const map = new window.kakao.maps.Map(containerRef.current, {
          center: coords,
          level: 4,
        })
        const marker = new window.kakao.maps.Marker({ position: coords })
        marker.setMap(map)
      })
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [latitude, longitude, name])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '220px', borderRadius: '12px', overflow: 'hidden' }}
    />
  )
}
