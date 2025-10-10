'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type CarouselImage = {
    src: string;
    alt?: string;
};

type CarouselProps = {
    images: CarouselImage[];
    width?: number;
    height?: number;
};

const Carousel: React.FC<CarouselProps> = ({
    images,
    width = 600,
    height = 400,
}) => {
    const [current, setCurrent] = useState(0);

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <Image
                src={images[current].src}
                alt={images[current].alt || 'carousel image'}
                width={width}
                height={height}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
                priority
            />
            <button
                onClick={prevImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: 10,
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    cursor: 'pointer',
                }}
                aria-label="Previous image"
            >
                &#8592;
            </button>
            <button
                onClick={nextImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: 10,
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    cursor: 'pointer',
                }}
                aria-label="Next image"
            >
                &#8594;
            </button>
            <div
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 8,
                }}
            >
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: idx === current ? '#fff' : 'rgba(255,255,255,0.5)',
                            display: 'inline-block',
                            cursor: 'pointer',
                        }}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;