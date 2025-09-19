"use client";
import { useState } from "react";
import { SoundcloudPlaylist } from "soundcloud.ts/dist/types";
import SoundcloudIFrame from "./SoundcloudIFrame";
import { PageQuery } from "../../../tina/__generated__/types";

export type SoundcloudPlayerProps = {
    playlist: SoundcloudPlaylist | null;
    content: PageQuery["page"]["musicPlayer"] | null;
}

export default function SoundcloudPlayer({ playlist, content }: SoundcloudPlayerProps) {
    if (!playlist || !playlist.tracks) {
        return null;
    }

    return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {content?.title ? content.title : playlist.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {playlist.tracks.map((track, index) => {
                const [showPlayer, setShowPlayer] = useState(false);
                
                  return (
                    <div 
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {track?.artwork_url && (
                        <img 
                          src={track.artwork_url} 
                          alt={track.title}
                          className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                      )}
                      <h3 className="text-xl font-bold mb-2">{track?.title}</h3>
                      <p className="mb-4">{track?.description}</p>
                        <button
                          onClick={() => setShowPlayer(true)}
                          className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors"
                        >
                          ▶ Play
                        </button>

                        {playlist.tracks?.[index] && showPlayer === true && (
                          <SoundcloudIFrame 
                            url={playlist.tracks[index].uri} 
                            height={550} 
                            color="#c27aff" />
                        )}
                      
                    </div>
                  )
})}
            </div>
          </div>
    );
}

// import React, { useState, useRef, useEffect } from 'react';
// import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share2, MoreHorizontal, Clock } from 'lucide-react';
// export default function SoundcloudPlayer(playlist) {

//   const [currentTrack, setCurrentTrack] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [volume, setVolume] = useState(70);
//   const [showVolumeSlider, setShowVolumeSlider] = useState(false);
//   let progressInterval = useRef(undefined);

//   const formatTime = (ms) => {
//     const seconds = Math.floor(ms / 1000);
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   const formatNumber = (num) => {
//     if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
//     if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
//     return num.toString();
//   };

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       clearInterval(progressInterval);
//       setIsPlaying(false);
//     } else {
//       setIsPlaying(true);
//       progressInterval = setInterval(() => {
//         setProgress(prev => {
//           if (prev >= 100) {
//             nextTrack();
//             return 0;
//           }
//           return prev + 0.5;
//         });
//       }, 100);
//     }
//   };

//   const nextTrack = () => {
//     setCurrentTrack(prev => (prev + 1) % playlist.tracks.length);
//     setProgress(0);
//   };

//   const prevTrack = () => {
//     setCurrentTrack(prev => prev === 0 ? playlist.tracks.length - 1 : prev - 1);
//     setProgress(0);
//   };

//   const selectTrack = (index) => {
//     setCurrentTrack(index);
//     setProgress(0);
//     if (!isPlaying) {
//       togglePlayPause();
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (progressInterval) {
//         clearInterval(progressInterval);
//       }
//     };
//   }, []);

//   const currentTrackData = playlist.tracks[currentTrack];

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 text-white">
//         <div className="flex items-center gap-4">
//           <img 
//             src={playlist.artwork_url} 
//             alt={playlist.title}
//             className="w-24 h-24 rounded shadow-lg"
//           />
//           <div>
//             <h1 className="text-3xl font-bold">{playlist.title}</h1>
//             <p className="text-orange-100 text-lg">{playlist.artist}</p>
//             <div className="flex items-center gap-4 mt-2 text-sm">
//               <span className="flex items-center gap-1">
//                 <Heart size={16} />
//                 {formatNumber(playlist.likes_count)}
//               </span>
//               <span>{formatNumber(playlist.reposts_count)} reposts</span>
//               <span>{playlist.tracks.length} tracks</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Now Playing */}
//       <div className="bg-gray-50 border-b p-4">
//         <div className="flex items-center gap-4">
//           <img 
//             src={currentTrackData.artwork_url} 
//             alt={currentTrackData.title}
//             className="w-16 h-16 rounded shadow"
//           />
//           <div className="flex-1">
//             <h3 className="font-semibold text-gray-800">{currentTrackData.title}</h3>
//             <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
//               <span className="flex items-center gap-1">
//                 <Heart size={14} className="text-red-500" />
//                 {formatNumber(currentTrackData.likes_count)}
//               </span>
//               <span>{formatNumber(currentTrackData.playback_count)} plays</span>
//             </div>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="mt-4">
//           <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
//             <span>{formatTime((progress / 100) * currentTrackData.duration)}</span>
//             <div className="flex-1 bg-gray-200 rounded-full h-1 cursor-pointer">
//               <div 
//                 className="bg-orange-500 h-1 rounded-full transition-all duration-300"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//             <span>{formatTime(currentTrackData.duration)}</span>
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="flex items-center justify-between mt-4">
//           <div className="flex items-center gap-2">
//             <button 
//               onClick={prevTrack}
//               className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
//             >
//               <SkipBack size={20} />
//             </button>
//             <button 
//               onClick={togglePlayPause}
//               className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg"
//             >
//               {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//             </button>
//             <button 
//               onClick={nextTrack}
//               className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
//             >
//               <SkipForward size={20} />
//             </button>
//           </div>

//           <div className="flex items-center gap-2">
//             <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
//               <Heart size={20} />
//             </button>
//             <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
//               <Share2 size={20} />
//             </button>
//             <div className="relative">
//               <button 
//                 onClick={() => setShowVolumeSlider(!showVolumeSlider)}
//                 className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
//               >
//                 <Volume2 size={20} />
//               </button>
//               {showVolumeSlider && (
//                 <div className="absolute bottom-full right-0 mb-2 bg-white shadow-lg rounded p-2">
//                   <input
//                     type="range"
//                     min="0"
//                     max="100"
//                     value={volume}
//                     onChange={(e) => setVolume(Number(e.target.value))}
//                     className="w-20 accent-orange-500"
//                   />
//                 </div>
//               )}
//             </div>
//             <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
//               <MoreHorizontal size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Track List */}
//       <div className="max-h-96 overflow-y-auto">
//         {playlist.tracks.map((track, index) => (
//           <div
//             key={index}
//             onClick={() => selectTrack(index)}
//             className={`flex items-center gap-4 p-4 border-b cursor-pointer transition-colors ${
//               index === currentTrack 
//                 ? 'bg-orange-50 border-orange-200' 
//                 : 'hover:bg-gray-50'
//             }`}
//           >
//             <div className="relative">
//               <img 
//                 src={track.artwork_url} 
//                 alt={track.title}
//                 className="w-12 h-12 rounded"
//               />
//               {index === currentTrack && isPlaying && (
//                 <div className="absolute inset-0 bg-black bg-opacity-40 rounded flex items-center justify-center">
//                   <div className="flex gap-1">
//                     <div className="w-1 h-4 bg-white rounded animate-pulse" style={{animationDelay: '0ms'}}></div>
//                     <div className="w-1 h-4 bg-white rounded animate-pulse" style={{animationDelay: '150ms'}}></div>
//                     <div className="w-1 h-4 bg-white rounded animate-pulse" style={{animationDelay: '300ms'}}></div>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <div className="flex-1 min-w-0">
//               <h4 className={`font-medium truncate ${
//                 index === currentTrack ? 'text-orange-600' : 'text-gray-800'
//               }`}>
//                 {track.title}
//               </h4>
//               <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
//                 <span className="flex items-center gap-1">
//                   <Heart size={12} className="text-red-500" />
//                   {formatNumber(track.likes_count)}
//                 </span>
//                 <span>{formatNumber(track.playback_count)} plays</span>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <Clock size={14} />
//               {formatTime(track.duration)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
