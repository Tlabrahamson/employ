import React, { useEffect, useState } from "react";
import axios from "axios";
import FormWrapper from "../styles/FormWrapper";
import { useParams } from "react-router";

const UpdateJobListing = () => {
  const url = "http://jr-dev-sim-backend.herokuapp.com";
  const { jobId } = useParams();
  const [job, setJob] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  useEffect(() => {
    axios
      .get(`${url}/api/job`)
      .then(res => setJob(res.data.find(job => job._id === jobId)))
      .catch(err => console.log(err));
  }, [jobId]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const updatedJob = {
        jobTitle,
        company,
        description,
        location,
        salary,
        contactName,
        contactEmail
      };

      if (updatedJob.jobTitle === "") {
        updatedJob.jobTitle = job.jobTitle;
      }

      if (updatedJob.company === "") {
        updatedJob.company = job.company;
      }

      if (updatedJob.description === "") {
        updatedJob.description = job.description;
      }

      if (updatedJob.location === "") {
        updatedJob.location = job.location;
      }

      if (updatedJob.salary === "") {
        updatedJob.salary = job.salary;
      }

      if (updatedJob.contactName === "") {
        updatedJob.contactName = job.contactName;
      }

      if (updatedJob.contactEmail === "") {
        updatedJob.contactEmail = job.contactEmail;
      }

      axios.post(`${url}/api/job/update/${jobId}`, updatedJob).then(res => {
        setJob(updatedJob);
      });

      alert("Job Updated!");
      window.location = "/";
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <FormWrapper>
      <h2>Update A Job Listing</h2>
      <form method="POST">
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          name="job-title"
          onChange={e => setJobTitle(e.target.value)}
          value={jobTitle}
          placeholder={job.jobTitle}
        />

        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          onChange={e => setCompany(e.target.value)}
          value={company}
          placeholder={job.company}
        />

        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          onChange={e => setDescription(e.target.value)}
          value={description}
          placeholder={job.description}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          onChange={e => setLocation(e.target.value)}
          value={location}
          placeholder={job.location}
        />

        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          name="salary"
          onChange={e => setSalary(e.target.value)}
          value={salary}
          placeholder={job.salary}
        />

        <label htmlFor="contact-name">Contact Name</label>
        <input
          type="text"
          name="contact-name"
          onChange={e => setContactName(e.target.value)}
          value={contactName}
          placeholder={job.contactName}
        />

        <label htmlFor="contact-email">Contact Email</label>
        <input
          type="text"
          name="contact-email"
          onChange={e => setContactEmail(e.target.value)}
          value={contactEmail}
          placeholder={job.contactEmail}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </FormWrapper>
  );
};

export default UpdateJobListing;
