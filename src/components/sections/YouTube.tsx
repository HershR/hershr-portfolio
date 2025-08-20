import React from "react";
import profile from "../../assets/yt_profile.png";

type Video = {
  id: string;
  title: string;
  url: string;
};

const videos: Video[] = [
  {
    id: "1",
    title: "Slowpoke Cafe Devlog",
    url: "https://youtu.be/VgGgHT0XT3E",
  },
];

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@HavcDev";

const YouTube: React.FC = () => (
  <section id="youtube" className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">YouTube</h2>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
        <img
          src={profile}
          alt="HavcDev Profile"
          className="w-32 h-32 rounded-md mx-auto"
        />
      </a>
      <p className="text-primary text-center md:text-left mt-4 md:ml-4 max-w-xl mx-auto">
        Follow my development journey on my YouTube channel . I regularly post
        devlogs and updates! Started July 2025
      </p>
    </div>
    <p></p>
    <h3>Featured Videos</h3>
    <ul>
      {videos.map((video) => (
        <li key={video.id}>
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            {video.title}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default YouTube;
