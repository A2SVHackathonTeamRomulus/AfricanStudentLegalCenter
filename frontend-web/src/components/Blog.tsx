import React, { ReactNode } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  title: string;
  content: ReactNode;
  publisher: string;
  onRemove?: () => void;
}

const Blog = ({ title, content, publisher, onRemove }: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="text-muted">Published by: {publisher}</p>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
        <button className="btn btn-danger m-3" onClick={onRemove}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Blog;
