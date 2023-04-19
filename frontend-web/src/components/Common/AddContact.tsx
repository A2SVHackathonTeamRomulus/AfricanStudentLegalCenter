import React, { useState } from "react";
import axios from "axios";

const AddContact = () => {
  const [country, setCountry] = useState("");
  const [sectorName, setSectorName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create data object
    const data = {
      country: country,
      sectorName: sectorName,
      phone: phone,
      email: email,
    };

    try {
      // Make a POST request to the backend API endpoint
      const response = await axios.post("/api/contacts", data);

      // Handle success
      console.log("Contact added successfully", response.data);
      // You can redirect to another page or perform other actions
    } catch (error) {
      // Handle error
      console.error("Failed to add contact", error);
      // You can show an error message to the user here
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="country" className="form-label">
          Country Name
        </label>
        <input
          id="country"
          type="text"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="sectorName" className="form-label">
          Sector Name
        </label>
        <input
          id="sectorName"
          type="text"
          className="form-control"
          value={sectorName}
          onChange={(e) => setSectorName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Contact
      </button>
    </form>
  );
};

export default AddContact;
