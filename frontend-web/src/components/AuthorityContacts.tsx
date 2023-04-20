import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import axios, { AxiosError } from "axios";
import { VscLaw } from "react-icons/vsc";

interface Props {
  isAdmin: boolean; // Add isAdmin prop to indicate if user is an admin or not
  onDelete?: (id: number) => void; // Add onDelete prop to handle delete event
}

interface AuthorityContactData {
  id: number;
  country: string;
  sector: string;
  phone: string;
}

const AuthorityContacts = ({ isAdmin, onDelete }: Props) => {
  const [contactData, setContactData] = useState<AuthorityContactData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Update the URL with the endpoint to fetch contact data from the API
        const response = await axios.get("http://localhost:3000/contacts");
        setContactData(response.data);
      } catch (error) {
        console.error("Error fetching authority contact data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRemove = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/blog/${id}`); // Update URL with correct endpoint
      setContactData(contactData.filter((contact) => contact.id !== id));
      if (onDelete) {
        onDelete(id); // Call onDelete callback with the id of the removed contact item
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error(`Error deleting contact item: ${axiosError.message}`); // Update error message
      } else {
        console.error("Unknown error occurred while deleting contact item."); // Update error message
      }
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-start m-2">
      {contactData.length > 0 ? (
        contactData.map((contact) => (
          <div key={contact.id} className="card card-width m-2 ">
            <div className="row">
              <div className="col">
                <VscLaw className="bg-light" style={{ fontSize: "15rem" }} />
              </div>
              <div className="col d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{contact.country}</h5>
                  <p className="text-muted">{contact.sector}</p>
                  <p className="card-text">{contact.phone}</p>
                  <h5>
                    <AiOutlineMail />
                  </h5>
                </div>
                {isAdmin && (
                  <div className="row">
                    <button
                      title="submit"
                      className="btn btn-danger col"
                      onClick={() => handleRemove(contact.id)} // Pass contact id to handleRemove function
                    >
                      <RiDeleteBin6Line />
                    </button>
                    <h5 className="col">
                      <BiEdit />
                    </h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading authority contact data...</p>
      )}
    </div>
  );
};

export default AuthorityContacts;
