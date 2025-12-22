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
        <div className='relative h-100 cursor-pointer'>
            <Image
                src={albumImages[0]?.proxySrc ?? ""}
                alt={albumName ?? "Album cover"}
                className="w-full mb-4"
                objectFit="cover"
                fill={true}
                onClick={() => setOpen(true)}
            />
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>
        </div>
    
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            render={{ slide: LightboxImage }}
            />
      </>
  )
}