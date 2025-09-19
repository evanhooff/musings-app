import 'server-only'
// https://www.npmjs.com/package/soundcloud.ts

import Soundcloud from "soundcloud.ts"

export default async function useSoundcloud({ url }: { url: string | null }) {
    if (!url) {
        return null;
    }
    const soundcloud = new Soundcloud('dUSSYkKvVfgl8MqbBbjwn7UbpM7QVNks', '2-307333-252185868-MeClgfNwoQ9Yoa')
    try {
        const playlist = await soundcloud.playlists.getAlt(url);
        return {
            playlist
        };
    } catch (error) {
        console.error("Error fetching SoundCloud playlist:", error);
        return null;
    }
}