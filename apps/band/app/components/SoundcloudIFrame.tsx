// components/SoundCloudPlayer.tsx
import React from "react";

interface SoundCloudPlayerProps {
  url: string; // Track or playlist URL
  height?: number;
  color?: string;
}

const SoundcloudIFrame: React.FC<SoundCloudPlayerProps> = ({
  url,
  height = 400,
  color = "#ff5500",
}) => {
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url
  )}&color=${encodeURIComponent(
    color
  )}&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=false`;

  return (
    <div id="soundcloud-player" className="my-8">
      <iframe
        width="100%"
        height={height}
        allow="autoplay"
        src={embedUrl}
      />
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Listen on SoundCloud
        </a>
      </div>
    </div>
  );
};

export default SoundcloudIFrame;
