// Blog.jsx

import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios, { AxiosError } from "axios";

interface Props {
  isAdmin: boolean; // Add isAdmin prop to indicate if user is an admin or not
  onDelete?: (id: number) => void; // Add onDelete prop to handle delete event
}

interface BlogData {
  id: number;
  title: string;
  content: string;
  publisher: string;
}

const Blog = ({ isAdmin, onDelete }: Props) => {
  const [blogData, setBlogData] = useState<BlogData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog");
        setBlogData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          setError(`Error fetching blog data: ${axiosError.message}`);
        } else {
          setError("Unknown error occurred while fetching blog data.");
        }
      }
    };

    fetchData();
  }, []);

  const handleRemove = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/blog/${id}`);
      setBlogData(blogData.filter((blog) => blog.id !== id));
      if (onDelete) {
        onDelete(id); // Call onDelete callback with the id of the removed blog item
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        setError(`Error deleting blog item: ${axiosError.message}`);
      } else {
        setError("Unknown error occurred while deleting blog item.");
      }
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-start">
      {blogData.length > 0 ? (
        blogData.map((blog) => (
          <div className="card card-width m-2 " key={blog.id}>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.content}</p>
              <p className="text-muted">Published by: {blog.publisher}</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
              {/* Render delete button only if user is an admin */}
              {isAdmin && (
                <button
                  className="btn btn-danger m-3"
                  onClick={() => handleRemove(blog.id)}
                  title="Delete Blog"
                >
                  <RiDeleteBin6Line />
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>
          {" "}
          {error ? (
            <div className="alert alert-danger mt-3">{error}</div>
          ) : (
            <div className="alert alert-info mt-3">Loading blog data...</div>
          )}{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default Blog;
