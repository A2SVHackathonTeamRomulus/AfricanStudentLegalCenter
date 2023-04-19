import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

interface Props {
  title: string;
  url: string;
  onRemove?: () => void;
}

interface VideoData {
  title: string;
  url: string;
}

const Video = ({ title, url, onRemove }: Props) => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/videos"); // Replace '/api/videos' with your actual backend API endpoint for fetching videos
        setVideoData(response.data as VideoData);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card card-width">
      <div className="card-body">
        {videoData ? (
          <>
            <h5 className="card-title">{videoData.title}</h5>
            <p className="card-text">{videoData.url}</p>
          </>
        ) : (
          <p>Loading video data...</p>
        )}
        <a href="#" className="btn btn-primary">
          View Details
        </a>
        <button
          className="btn btn-danger m-3"
          onClick={onRemove}
          title="Delete Video"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Video;
