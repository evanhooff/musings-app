import 'server-only'
import { AlbumResponseDto, type AssetResponseDto, getAllAlbums, getAssetInfo, init } from "@immich/sdk";

const API_KEY = process.env.IMMICH_API_KEY || "";
const BASE_URL = process.env.IMMICH_BASE_URL || "";
// Use our custom image API route that handles the API key server-side
const THUMBNAIL_SRC = (assetId: string) => `/api/images/${assetId}?size=thumbnail`;

export type AlbumWithThumbnail = {
    id: AlbumResponseDto["id"];
    albumName: AlbumResponseDto["albumName"];
    description:  AlbumResponseDto["description"];
    thumbnailSrc?: string | null;
    thumbnail?: AssetResponseDto | null;
}

export async function initImmich() {
    try {
        // TODO: set the access token in the cookies?
        await init({ baseUrl: BASE_URL, apiKey: API_KEY });
        console.log("Immich SDK initialized.");
    } catch (error) {
        console.error("Error initializing Immich SDK:", error);
    }
}

export async function fetchImmichAlbums() {
    try {
        const albums = await getAllAlbums({});
        return albums.map(album => {
            return {
                id: album.id,
                albumThumbnailAssetId: album.albumThumbnailAssetId,
                albumName: album.albumName,
                description: album.description || "",
                thumbnailSrc: album.albumThumbnailAssetId ? THUMBNAIL_SRC(album.albumThumbnailAssetId) : null,
            }
        });
    } catch (error) {
        console.error("Error fetching Immich albums:", error);
    }
}

export async function fetchAlbumThumbnail({ id }: { id: string }) {
    try {
        const thumbnail = await getAssetInfo({ id });
        return thumbnail
    } catch (error) {
        console.error("Error fetching Immich albums:", error);
    }
}