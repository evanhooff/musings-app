import 'server-only'
import { AlbumResponseDto, type AssetResponseDto, getAlbumInfo, getAllAlbums, getAssetInfo, init } from "@immich/sdk";

const API_KEY = process.env.IMMICH_API_KEY || "";
const BASE_URL = process.env.IMMICH_BASE_URL || "";

// Helper function to generate Immich URLs (without API key - that gets added server-side)
function getImgSrc(assetId: string, size: string = 'thumbnail'): string {
  // Encode the full Immich URL as a parameter so the route can just add the API key
  const immichPath = `${BASE_URL}/assets/${assetId}/thumbnail?size=${size}`;
  return `/api/images/proxy?url=${encodeURIComponent(immichPath)}`;
}

export type AlbumWithThumbnail = {
    id: AlbumResponseDto["id"];
    albumName: AlbumResponseDto["albumName"];
    description:  AlbumResponseDto["description"];
    thumbnailSrc?: string | null;
    thumbnail?: AssetResponseDto | null;
}

export type AssetSrc = {
    originalFileName?: string;
    thumbnailSrc?: string | null;
    proxySrc?: string | null;
}

export type AlbumInfoWithAssets = AlbumResponseDto & {
    images: AssetSrc[];
}

export async function initImmich() {
    try {
        await init({ baseUrl: BASE_URL, apiKey: API_KEY });
        console.log("Immich SDK initialized.");
    } catch (error) {
        console.error("Error initializing Immich SDK:", error);
    }
}

export async function getAlbums() {
    try {
        const albums = await getAllAlbums({ shared: true });
        return albums.map(album => {
            return {
                id: album.id,
                albumThumbnailAssetId: album.albumThumbnailAssetId,
                albumName: album.albumName,
                description: album.description || "",
                thumbnailSrc: album.albumThumbnailAssetId ? getImgSrc(album.albumThumbnailAssetId) : null,
            }
        });
    } catch (error) {
        console.error("Error fetching Immich albums:", error);
    }
}

export async function getAlbum(albumId: string): Promise<AlbumInfoWithAssets | undefined> {
    try {
        const album = await getAlbumInfo({ id: albumId });
        const images = album.assets.map(asset => ({
            originalFileName: asset.originalFileName,
            thumbnailSrc: getImgSrc(asset.id),
            proxySrc: getImgSrc(asset.id, 'preview'),
        }));
        return {
            ...album,
            images
        };
    } catch (error) {
        console.error("Error fetching Immich album info:", error);
    }
}
