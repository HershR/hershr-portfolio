import React from "react";
import profile from "../../assets/yt_profile.png";
import ToolChip from "../ToolChip";
type Video = {
  id: string;
  videoId: string;
  title: string;
  url: string;
  timestamp?: number;
  tools?: string[];
};

const videos: Video[] = [
  {
    id: "1",
    videoId: "VgGgHT0XT3E",
    title: "Slowpoke Cafe Devlog",
    url: "https://youtu.be/VgGgHT0XT3E",
    timestamp: 74,
    tools: ["Unity", "C#", "Blender"],
  },
];

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@HavcDev";
const YouTubeSection: React.FC = () => (
  <section id="youtube" className="max-w-5xl mx-auto px-4">
    <div className="mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">YouTube</h2>
      <div className="glass justify-center items-center rounded-xl p-8 mb-6 border-primary/10 border transition-all">
        <div className="flex-1 justify-center items-center max-w-3xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={profile}
                alt="HavcDev Profile"
                className="w-32 h-32 rounded-md mx-auto"
              />
            </a>
            <p className="flex-1 text-primary text-center md:text-left mt-4 md:ml-4 mx-auto">
              Follow my development journey on my YouTube channel. Where I post
              devlogs and updates on stuff I am working on! Started July 2025
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.title}
            className="rounded-xl p-6 border border-accent/10 hover:-translate-y-1  transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{video.title}</h3>
            <div className="flex flex-wrap gap-2">
              {video.tools?.map((tool) => (
                <ToolChip key={tool} tool={tool} />
              ))}
            </div>
            <a
              className="mt-2 inline-block hover:underline"
              href={video.url + `?t=${video.timestamp ?? 0}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
                className="aspect-video w-full max-w-[320px] rounded-lg mb-4 object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default YouTubeSection;
