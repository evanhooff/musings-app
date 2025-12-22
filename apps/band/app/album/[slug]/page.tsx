
import { AssetSrc, getAlbum, getAlbums, initImmich } from "../../../lib/immich";
import { HeaderText } from "../../components/HeaderText";
import Nav from "../../components/Nav";
import Album from "../../components/photo/Album";

import Lightbox from "./components/Lightbox";

export default async function Page(props: PageProps<'/album/[slug]'>) {
  const { slug } = await props.params
  
  await initImmich();
  const albums = await getAlbums();

  const defaultAlbum = albums?.find(album => album.id === slug) || albums?.[0] || null;
  const albumInfo = defaultAlbum ? await getAlbum(defaultAlbum.id) : undefined;

  return (
    <div>
      <Nav sections={null} fixed={false} />
      <div className="md:flex mx-auto gap-4 md:gap-12 md:my-12">
          
          {/* Header - shows first on mobile, top of right column on desktop */}
          <div className="md:hidden px-4">
            <HeaderText className="!font-sans" pageTitle={true} size={6} text={albumInfo?.albumName || albumInfo?.id || "Untitled Album"} />
          </div>

          <div className="w-full md:max-w-[50%]">
            {/* Album assets */}
            { albumInfo && albumInfo.assets && albumInfo.assets.length > 0 &&
              <Lightbox albumImages={albumInfo?.images ?? []} albumName={albumInfo?.albumName} />
            }
          </div>
          <div className="md:text-left px-4">

            <div className="hidden md:block">
              <HeaderText size={3} text={'Photo Album'} className="md:text-left" />
              <span className="text-white/70 text-lg md:text-xl">
                {albumInfo?.albumName ?? "Untitled Album"}
              </span>
              <p className="text-white/60 mt-4 mb-8">
                {albumInfo?.description ?? "No description available."}
              </p>
            </div>
            {/* Other albums overview */}
            { albums && albums.length > 0 &&
              <div id="photos" className="py-8">
                  {albums?.filter(album => album.id !== slug).map((album, idx) => (
                    <div key={album.id ?? idx}>
                        <Album album={album} view="compact" />
                      </div>
                  ))}
              </div>
            }
          </div>
      </div>
    </div>
  )
}