import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

interface Props {
  onRemove?: () => void;
}

interface AuthorityContactData {
  countryName: string;
  sectorName: string;
  phoneNumber: number;
  email: string;
}

const AuthorityContacts = ({ onRemove }: Props) => {
  const [contactData, setContactData] = useState<AuthorityContactData | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Update the URL with the endpoint to fetch contact data from the API
        const response = await axios.get(
          "<your_api_endpoint>/authority-contacts"
        );
        setContactData(response.data);
      } catch (error) {
        console.error("Error fetching authority contact data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card card-width">
      <div className="card-body row">
        <div className="col">
          <img src="123" alt="The images" />
        </div>

        <div className="col">
          {contactData ? (
            <>
              <h5 className="card-title">{contactData.countryName}</h5>
              <p className="text-muted">{contactData.sectorName}</p>
              <p className="card-text">{contactData.phoneNumber}</p>
              <h5>
                <AiOutlineMail />
                {contactData.email}
              </h5>
              <div className="row">
                <button
                  title="submit"
                  className="btn btn-danger col"
                  onClick={onRemove}
                >
                  <RiDeleteBin6Line />
                </button>
                <h5 className="col">
                  <BiEdit />
                </h5>
              </div>
            </>
          ) : (
            <p>Loading authority contact data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorityContacts;
