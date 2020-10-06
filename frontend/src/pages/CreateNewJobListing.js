import React, { useState } from "react";
import FormWrapper from "../styles/FormWrapper";
import axios from "axios";

const CreateNewJobListing = () => {
  const url = "http://jr-dev-sim-backend.herokuapp.com";
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newJob = {
        jobTitle,
        company,
        description,
        location,
        salary,
        contactName,
        contactEmail
      };

      axios
        .post(`${url}/api/job/create`, newJob)
        .then(res => console.log(res.data));

      alert("Job Created!");
      window.location = "/";
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <FormWrapper>
      <h2>Create A New Job Listing</h2>
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
