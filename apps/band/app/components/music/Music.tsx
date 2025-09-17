import type { PageQuery } from "../../../tina/__generated__/types";

export default function Music(music: PageQuery["page"]["music"]) {
    if (!music) {
        return null;
    }
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {music.title}
            </h2>
        </div>
    );
}