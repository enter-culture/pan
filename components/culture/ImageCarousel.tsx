'use client'

import { useState } from 'react'

import Image from 'next/image'

import {
  indicator,
  slide,
  slideImage,
  track,
  wrapper,
  wrapperClickable,
  wrapperDefault,
} from './ImageCarousel.css'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  function handleClick() {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const isMultiple = images.length > 1

  return (
    <div
      className={`${wrapper} ${isMultiple ? wrapperClickable : wrapperDefault}`}
      onClick={isMultiple ? handleClick : undefined}
    >
      <div
        className={track}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className={slide}>
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className={slideImage}
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      {isMultiple && (
        <span className={indicator}>
          {current + 1}/{images.length}
        </span>
      )}
    </div>
  )
}
