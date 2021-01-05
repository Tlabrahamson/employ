import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import FormWrapper from "../styles/FormWrapper";
import axios from "axios";
import ErrorAlert from "../components/ErrorAlert";

const CreateNewJobListing = () => {
  const { userData } = useContext(UserContext);
  const url = "https://jr-dev-sim-backend.herokuapp.com";
  // const url = "http://localhost:5000";
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newJob = {
        jobTitle,
        company,
        category,
        description,
        location,
        salary,
        contactName,
        contactEmail,
        postedBy: userData.user._id
      };

      if (
        jobTitle === "" ||
        company === "" ||
        category === "" ||
        description === "" ||
        location === "" ||
        salary === "" ||
        contactName === "" ||
        contactEmail === ""
      ) {
        setError("You must fill out every field");
      }

      await axios
        .post(`${url}/api/job/create`, newJob)
        .then(res => console.log(res.data));

      alert("Job Created!");
      window.location = "/";
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <FormWrapper>
      <h2>Create A New Job Listing</h2>
      {error && (
        <ErrorAlert message={error} clearError={() => setError(undefined)} />
      )}
      <form method="POST">
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          name="job-title"
          onChange={e => setJobTitle(e.target.value)}
          value={jobTitle}
          placeholder="Job Title"
        />

        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          onChange={e => setCompany(e.target.value)}
          value={company}
          placeholder="Company"
        />

        <label htmlFor="category">Category</label>
        <select name="category" onChange={e => setCategory(e.target.value)}>
          <option value="" disabled selected>
            Select a Job Category
          </option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
          <option value="sales-and-marketing">Sales and Marketing</option>
          <option value="customer-support">Customer Support</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          onChange={e => setDescription(e.target.value)}
          value={description}
          placeholder="Description"
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          onChange={e => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />

        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          name="salary"
          onChange={e => setSalary(e.target.value)}
          value={salary}
          placeholder="Salary"
        />

        <label htmlFor="contact-name">Contact Name</label>
        <input
          type="text"
          name="contact-name"
          onChange={e => setContactName(e.target.value)}
          value={contactName}
          placeholder="Contact Name"
        />

        <label htmlFor="contact-email">Contact Email</label>
        <input
          type="text"
          name="contact-email"
          onChange={e => setContactEmail(e.target.value)}
          value={contactEmail}
          placeholder="Contact Email"
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </FormWrapper>
  );
};

export default CreateNewJobListing;
