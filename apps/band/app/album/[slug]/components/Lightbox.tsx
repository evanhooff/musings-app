"use client"

import { useState } from 'react';
import LightboxImage from "./LightboxImage";
import Image from 'next/image'

import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AssetSrc } from '../../../../lib/immich';

export default function LightboxComponent({ albumImages, albumName }: { albumImages: AssetSrc[], albumName: string }) {
  const [open, setOpen] = useState(false);
  
    const slides: SlideImage[] = albumImages.map((img: AssetSrc) => ({ 
        src: `${typeof window !== 'undefined' ? window.location.origin : ''}${img.proxySrc ?? img.thumbnailSrc ?? ''}` 
    }));
  return (
    <>
        <Image
            src={albumImages[0]?.thumbnailSrc ?? ""}
            alt={albumName ?? "Album cover"}
            className="w-48 h-48 object-cover rounded mb-4"
            width={192}
            height={192}
            onClick={() => setOpen(true)}
        />
        <button type="button" onClick={() => setOpen(true)}>
            Open Lightbox
        </button>
    
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            render={{ slide: LightboxImage }}
        />
    </>
  )
}