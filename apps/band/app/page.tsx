import useSoundcloud from "../lib/soundcloud";
import client from "../tina/__generated__/client";
import ClientLandingPage from "./client-landing-page";
import SoundcloudPlayer from "./components/SoundcloudPlayer";
import SoundCloudPlayer from "./components/SoundcloudPlayer";

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
  const playlist = await useSoundcloud();

  return (
    <>
      { playlist && 
        <SoundcloudPlayer {...playlist} />
      }
      <ClientLandingPage {...data} />
    </>
  )
}