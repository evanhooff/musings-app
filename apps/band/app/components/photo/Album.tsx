import React from "react";
import { AlbumWithThumbnail } from "../../../lib/immich";
import Image from 'next/image'

type AlbumProps = {
    album: AlbumWithThumbnail;
};

const Album: React.FC<AlbumProps> = ({ album }) => {
   return (
        <div className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
            {album.thumbnailSrc && (
                <Image
                    src={album.thumbnailSrc}
                    alt={album.albumName ?? "Album cover"}
                    className="w-48 h-48 object-cover rounded mb-4"
                    width={192}
                    height={192}
                    unoptimized
                />
            )}
            <div className="w-full max-w-xs text-center">
                <h3 className="text-lg font-semibold mb-2 break-words">{album.albumName ?? "Untitled Album"}</h3>
                <p className="text-white/70 mb-2 break-words">{album.description ?? ""}</p>
            </div>
            <a
                href={`/album/${album.id}`}
                className="button-51"
            >
                Meer foto's
            </a>
        </div>
    );
};

export default Album;