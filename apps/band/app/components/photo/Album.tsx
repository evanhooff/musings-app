import React from "react";
import { AlbumWithThumbnail } from "../../../lib/immich";
import Image from 'next/image'

type AlbumProps = {
    album: AlbumWithThumbnail;
    view?: "compact" | "detailed";
};

const Album: React.FC<AlbumProps> = ({ album, view = "detailed" }) => {
   return (
        <div className={`bg-gray-800 rounded-lg shadow p-4 w-full ${view === "compact" ? "flex flex-row items-center gap-4" : "flex flex-col items-center"}`}>
            {album.thumbnailSrc && (
                <Image
                    src={album.thumbnailSrc}
                    alt={album.albumName ?? "Album cover"}
                    className={`rounded object-cover ${view === "compact" ? "w-24 h-full flex-shrink-0" : "w-48 h-48 mb-4"}`}
                    width={view === "compact" ? 96 : 192}
                    height={view === "compact" ? 96 : 192}
                />
            )}
            <div className={`${view === "compact" ? "flex-1 text-left" : "w-full max-w-xs text-center"}`}>
            <h3 className="text-lg font-semibold mb-2 break-words">{album.albumName ?? "Untitled Album"}</h3>
            <p className="text-white/70 mb-2 break-words">{album.description ?? ""}</p>
            <a
            href={`/album/${album.id}`}
            className="button-51 inline-block"
            >
            Meer foto's
            </a>
            </div>
        </div>
    );
};

export default Album;