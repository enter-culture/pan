'use client'

import 'leaflet/dist/leaflet.css'

import { useEffect } from 'react'

import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { mapContainer, markerDescription, markerRegion, markerTitle, popup } from './HeritageMap.css'

interface HeritageItem {
  name: string
  content_type: string
  region: string | null
  address: string | null
  latitude: number
  longitude: number
  description: string | null
}

interface HeritageMapProps {
  items: HeritageItem[]
  title: string
}

const CONTENT_TYPE_LABEL: Record<string, string> = {
  '종목': '무형유산 종목',
  '공방': '공방',
  '공연': '공연',
}

export function HeritageMap({ items, title }: HeritageMapProps) {
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    })
  }, [])

  if (!items.length) {
    return (
      <div className={mapContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#888', fontSize: '14px' }}>'{title}' 관련 지역 정보가 없습니다.</p>
      </div>
    )
  }

  const center: [number, number] = [items[0].latitude, items[0].longitude]

  return (
    <MapContainer center={center} zoom={10} className={mapContainer} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item, idx) => (
        <Marker key={idx} position={[item.latitude, item.longitude]}>
          <Popup className={popup}>
            <p className={markerTitle}>{item.name}</p>
            <p className={markerRegion}>{CONTENT_TYPE_LABEL[item.content_type] ?? item.content_type} · {item.region}</p>
            {item.address && <p className={markerDescription}>{item.address}</p>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
