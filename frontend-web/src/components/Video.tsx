import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios, { AxiosError } from "axios";

interface Props {
  isAdmin: boolean;
  onRemove?: (id: number) => void;
}

interface VideoData {
  id: number;
  title: string;
  url: string;
}

const Video = ({ isAdmin, onRemove }: Props) => {
  const [videoData, setVideoData] = useState<VideoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/videos"); // Replace '/api/videos' with your actual backend API endpoint for fetching videos
        setVideoData(response.data as VideoData[]);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRemove = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/videos/${id}`); // Update delete API endpoint with correct URL pattern
      setVideoData(videoData.filter((video) => video.id !== id));
      if (onRemove) {
        onRemove(id);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        setError(`Error deleting video item: ${axiosError.message}`);
      } else {
        setError("Unknown error occurred while deleting video item.");
      }
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-start m-2">
      {videoData.length > 0 ? (
        videoData.map((video) => (
          <div key={video.id} className="card card-width m-2">
            <div className="card-body">
              <h5 className="card-title">{video.title}</h5>
              <p className="card-text">{video.url}</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
                {isAdmin && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(video.id)}
                    title="Delete Video"
                  >
                    <RiDeleteBin6Line />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading video data...</p>
      )}
    </div>
  );
};

export default Video;
