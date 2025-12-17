"use client"

import LightboxImage from "./LightboxImage";

import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import { AssetSrc } from '../../../../lib/immich';

export default function LightboxComponent({ albumImages }: { albumImages: AssetSrc[] }) {
  
    const slides: SlideImage[] = albumImages.map((img: AssetSrc) => ({ 
        src: `${window.location.origin}${img.proxySrc ?? img.thumbnailSrc ?? ''}` 
    }));
  return (
    <> 
        
        <Lightbox
            slides={slides}
            render={{ slide: LightboxImage }}
            plugins={[Inline]}
            inline={{
                style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" },
            }}
        />
    </>
  )
}