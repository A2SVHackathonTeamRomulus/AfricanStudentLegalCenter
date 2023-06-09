import React, { FormEvent, useRef } from "react";

const AddBlog = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const publisherRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    if (titleRef.current !== null)
      formData.append("title", titleRef.current.value);
    if (contentRef.current !== null)
      formData.append("content", contentRef.current.value);
    if (publisherRef.current !== null)
      formData.append("publisher", publisherRef.current.value);

    try {
      // Make a POST request to the backend API endpoint for creating a new blog
      const response = await fetch("http://localhost:3000/blog", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Blog post successful, handle response
        console.log("Blog post successful");
        // You can redirect to another page or perform other actions
      } else {
        // Blog post failed, handle error response
        console.error("Blog post failed");
        // You can show an error message to the user here
      }
    } catch (error) {
      console.error("Blog post failed", error);
      // You can show an error message to the user here
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input ref={titleRef} id="title" type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea ref={contentRef} id="content" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="publisher" className="form-label">
          Publisher
        </label>
        <input
          ref={publisherRef}
          id="publisher"
          type="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Blog
      </button>
    </form>
  );
};

export default AddBlog;
