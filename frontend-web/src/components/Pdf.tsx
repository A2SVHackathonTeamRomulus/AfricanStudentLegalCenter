import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

interface Props {
  title: string;
  url: string;
  onRemove?: () => void;
}

interface PdfData {
  title: string;
  url: string;
}

const Pdf = ({ title, url, onRemove }: Props) => {
  const [pdfData, setPdfData] = useState<PdfData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/pdf"); // Replace '/api/pdf' with your actual backend API endpoint for fetching PDF data
        setPdfData(response.data as PdfData);
      } catch (error) {
        console.error("Error fetching PDF data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card card-width">
      <div className="card-body">
        {pdfData ? (
          <>
            <h5 className="card-title">{pdfData.title}</h5>
            <p className="card-text">{pdfData.url}</p>
            <a
              href={pdfData.url}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </>
        ) : (
          <p>Loading PDF data...</p>
        )}
        <button
          className="btn btn-danger m-3"
          onClick={onRemove}
          title="Delete PDF"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Pdf;
