import React from 'react'
import GalleryImg from './GalleryImg'
import GalleryBanner from './GalleryBanner'
import GalleryTitle from './GalleryTitle'

export default function Gallery() {
  return (
    <div>
        <GalleryBanner/>
        <GalleryTitle/>
        <GalleryImg/>
    </div>
  )
}
