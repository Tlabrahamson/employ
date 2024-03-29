import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleJobWrapper from "../styles/SingleJobWrapper";
import { CircularProgress } from "@material-ui/core";
import emailjs from "emailjs-com";
import ErrorAlert from "../components/ErrorAlert";

const ViewSingleJob = () => {
  const url = "https://employ-backend.onrender.com";
  const { userData } = useContext(UserContext);
  const { jobId } = useParams();
  const [job, setJob] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${url}/api/job`)
      .then(res => {
        setLoading(false);
        setJob(res.data.find(job => job._id === jobId));
      })
      .catch(err => console.log(err));
  }, [jobId]);

  const handleDelete = e => {
    e.preventDefault();
    axios
      .delete(`${url}/api/job/jobs/${jobId}`)
      .then(res => console.log("Job Deleted"));

    setSuccess("Job Deleted");
    console.log(open);
    setTimeout(() => {
      window.location = "/";
    }, 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      company: job.company,
      jobTitle: job.jobTitle,
      contactName: job.contactName,
      contactEmail: job.contactEmail
    };

    emailjs
      .send(
        "service_ncuep1z",
        "template_hltaytr",
        templateParams,
        "user_gi0JYUuvI9RmaYkD5X8zW"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Application Submitted!");
        },
        error => {
          console.log("FAILED...", error);
        }
      );

    setName("");
    setEmail("");
  };

  return loading === true ? (
    <div className="progress">
      <CircularProgress />
    </div>
  ) : (
    <>
      {success && (
        <ErrorAlert
          open={() => setOpen(true)}
          message={success}
          type="success"
        />
      )}
      <SingleJobWrapper>
        <h2>
          {job.jobTitle} - {job.company}
        </h2>
        <p>{job.location}</p>
        <p>{job.salary}</p>
        <hr />
        <p>{job.description}</p>
        <p className="contact-info">
          {job.contactName} | {job.contactEmail}
        </p>
        {userData.user && userData.user._id === job.postedBy ? (
          <div>
            <Link to={`/update/${job._id}`}>
              <button className="edit-button">Edit</button>
            </Link>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        ) : (
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <button className="apply-button" onClick={handleSubmit}>
              Apply for this position
            </button>
          </form>
        )}
      </SingleJobWrapper>
    </>
  );
};

export default ViewSingleJob;
