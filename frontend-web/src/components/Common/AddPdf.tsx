import React, { FormEvent, useRef } from "react";

const AddPdf = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    if (titleRef.current !== null)
      formData.append("title", titleRef.current.value);
    if (urlRef.current !== null) formData.append("url", urlRef.current.value);
    if (fileRef.current !== null && fileRef.current.files !== null)
      formData.append("file", fileRef.current.files[0]);

    try {
      // Make a POST request to the backend API endpoint for creating a new PDF
      const response = await fetch("/api/pdf", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // PDF upload successful, handle response
        console.log("PDF upload successful");
        // You can redirect to another page or perform other actions
      } else {
        // PDF upload failed, handle error response
        console.error("PDF upload failed");
        // You can show an error message to the user here
      }
    } catch (error) {
      console.error("PDF upload failed", error);
      // You can show an error message to the user here
    }
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
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
      <div className="mb-2">
        <label htmlFor="file" className="form-label">
          Input File
        </label>
        <input ref={fileRef} type="file" name="file" id="file" />
      </div>
      <button type="submit" className="btn btn-primary">
        Add PDF
      </button>
    </form>
  );
};

export default AddPdf;
