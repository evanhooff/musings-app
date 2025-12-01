import { AssetSrc, getAlbum, getAlbums, initImmich } from "../../../lib/immich";
import { HeaderText } from "../../components/HeaderText";
import Nav from "../../components/Nav";
import Album from "../../components/photo/Album";
import Carousel from "./components/Carousel";

export default async function Page(props: PageProps<'/album/[slug]'>) {
  const { slug } = await props.params
  const query = await props.searchParams;
  
  await initImmich();
  const albums = await getAlbums();

  const defaultAlbum = albums?.find(album => album.id === slug) || albums?.[0] || null;
  const albumInfo = defaultAlbum ? await getAlbum(defaultAlbum.id) : undefined;
  const photos = albumInfo?.images.map((img: AssetSrc) => ({
    alt: img.originalFileName,
    src: img.proxySrc ?? img.thumbnailSrc ?? '',
  })) || [];

  return (
    <div>
      <Nav sections={null} />
      <HeaderText size={1} text={'Albums: ' + slug} />

      {/* Album assets */}
      { albumInfo && albumInfo.assets && albumInfo.assets.length > 0 &&
          <div className="w-full h-dvh overflow-hidden">
            <Carousel images={photos} />
          </div>
      }
        
      {/* Album overview */}
      { albums && albums.length > 0 &&
        <div id="photos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8">
          {albums?.map((album, idx) => (
            <div key={album.id ?? idx}>
              <Album album={album} />
            </div>
          ))}
        </div>
      }
    </div>
  )
}