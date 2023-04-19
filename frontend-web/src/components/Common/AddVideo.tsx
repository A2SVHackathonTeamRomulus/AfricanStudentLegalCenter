import React, { FormEvent, useRef } from "react";

const AddVideo = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    if (titleRef.current !== null)
      formData.append("title", titleRef.current.value);
    if (urlRef.current !== null) formData.append("url", urlRef.current.value);

    try {
      // Make a POST request to the backend API endpoint for creating a new video
      const response = await fetch("/api/videos", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Video post successful, handle response
        console.log("Video post successful");
        // You can redirect to another page or perform other actions
      } else {
        // Video post failed, handle error response
        console.error("Video post failed");
        // You can show an error message to the user here
      }
    } catch (error) {
      console.error("Video post failed", error);
      // You can show an error message to the user here
    }
  };

  return (
    <form className="video-form" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input ref={titleRef} id="title" type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="url" className="form-label">
          URL
        </label>
        <input ref={urlRef} id="url" type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Video
      </button>
    </form>
  );
};

export default AddVideo;
