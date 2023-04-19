import React, { ReactNode, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios"; // Import axios for making HTTP requests

interface Props {
  title: string;
  content: ReactNode;
  publisher: string;
  onRemove?: () => void;
}

interface BlogData {
  title: string;
  content: ReactNode;
  publisher: string;
}

const Blog = ({ title, content, publisher, onRemove }: Props) => {
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Update the URL with your MongoDB Atlas connection string and API endpoint
        const response = await axios.get(
          "<your_mongodb_atlas_connection_string>/api/blog"
        );
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card card-width">
      <div className="card-body">
        {blogData ? (
          <>
            <h5 className="card-title">{blogData.title}</h5>
            <p className="card-text">{blogData.content}</p>
            <p className="text-muted">Published by: {blogData.publisher}</p>
          </>
        ) : (
          <p>Loading blog data...</p>
        )}
        <a href="#" className="btn btn-primary">
          View Details
        </a>
        <button
          className="btn btn-danger m-3"
          onClick={onRemove}
          title="Delete Blog"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Blog;
