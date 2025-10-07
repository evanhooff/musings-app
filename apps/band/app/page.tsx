import useSoundcloud from "../lib/soundcloud";
import { initImmich, fetchImmichAlbums, fetchAlbumThumbnail } from "../lib/immich";
import client from "../tina/__generated__/client";
import ClientLandingPage from "./client-landing-page";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export default async function Page({
  params,
}: {
  params: Promise<{ filename?: string[] }>;
}) {
  // Await the params since they're now a Promise in Next.js 15
  const resolvedParams = await params;

  const data = await client.queries.page({
    relativePath: resolvedParams.filename ? `${resolvedParams.filename.join('/')}.mdx` : "home.mdx",
  });
  const playlistUrl = data.data?.page?.musicPlayer?.playlistUrl || null;
  const playlist = playlistUrl ? await useSoundcloud({ url: playlistUrl }) : null;

  await initImmich();
  const albums = await fetchImmichAlbums();
  const thumbnails = await Promise.all((albums ?? []).map(async (album) => {
    if (album.albumThumbnailAssetId) {
      const thumbnail = await fetchAlbumThumbnail({ id: album.albumThumbnailAssetId });
      return { ...album, thumbnail };
    }
    return album;
  }));
  console.log("Fetched albums with thumbnails:", thumbnails);

  return (
    <ClientLandingPage {...data} {...playlist} albums={albums} />
  )
}