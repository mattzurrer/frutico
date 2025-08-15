'use client';

import { useState } from 'react';

interface VideoSectionProps {
  videoId: string;
  className?: string;
}

export default function VideoSection({ videoId, className = '' }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className={`px-6 lg:px-27 py-2 lg:py-4 ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        {!isPlaying ? (
          // Custom thumbnail with play button
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden cursor-pointer group" onClick={handlePlay}>
            {/* Custom thumbnail image */}
            <img
              src="/img/marcel-weder.png"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[var(--color-frutico-green-600)] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          // YouTube iframe when playing
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&enablejsapi=1&start=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
}
